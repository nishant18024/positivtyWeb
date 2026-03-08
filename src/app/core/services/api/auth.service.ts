import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';
import { CookieService } from '../cookie/cookie.service';

interface LoginResponse {
    token: string,
    user: any,
    isProfileComplete: boolean,
    hasPassword: boolean
}

declare var gapi: any;
declare var appleid: any;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = environment.baseUrl;
    private readonly TOKEN_KEY = 'auth_token';
    private readonly USER_KEY = 'current_user';
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser$: Observable<any>;

    constructor(
        private http: HttpService,
        private router: Router,
        private cookieService: CookieService
    ) {
        this.currentUserSubject = new BehaviorSubject<any>(this.getUser());
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    initializeGoogleSignIn(clientId: string): void {
        if (typeof gapi !== 'undefined') {
            gapi.load('auth2', () => {
                gapi.auth2.init({
                    client_id: clientId,
                });
            });
        }
    }

    loginWithGoogle(idToken: string): Observable<any> {
        return this.http.post<LoginResponse>(`${this.baseUrl}${API_ENDPOINTS.USER_LOGIN}`, {
            mode: 'google',
            token: idToken
        }).pipe(
            tap(res => {
                if (res && res.token) {
                    this.storeToken(res.token);
                }
                if (res && res.user) {
                    this.setUser(res.user);
                }
            })
        );
    }

    signOutGoogle(): void {
        if (typeof gapi !== 'undefined') {
            const googleAuth = gapi.auth2.getAuthInstance();
            if (googleAuth) {
                googleAuth.signOut().then(() => { });
            }
        }
    }

    initializeAppleSignIn(clientId: string, redirectURI: string): void {
        if (typeof appleid !== 'undefined') {
            appleid.auth.init({
                clientId: clientId,
                scope: 'name email',
                redirectURI: redirectURI,
                state: 'state',
                usePopup: true
            });
        }
    }

    signInWithApple(): Observable<any> {
        return new Observable(observer => {
            appleid.auth.signIn().then((response: any) => {
                observer.next(response);
                observer.complete();
            }).catch((error: any) => {
                observer.error(error);
            });
        });
    }

    signOutApple(): void {
        if (typeof appleid !== 'undefined') {
            appleid.auth.signOut();
        }
    }

    userRequestPasswordReset(emailPhone: string): Observable<any> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const payload: any = {};

        if (emailRegex.test(emailPhone.trim())) {
            payload.Email = emailPhone.trim();
        } else {
            payload.Phone = emailPhone.trim();
        }

        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.USER_REQUEST_PASSWORD_RESET}`, payload);
    }

    sendOtp(emailOrPhone: string): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.USER_LOGIN}`, {
            mode: 'send-otp',
            emailOrPhone
        });
    }

    resendOtp(emailOrPhone: string): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.USER_LOGIN}`, {
            mode: 'resend-otp',
            emailOrPhone
        });
    }

    verifyOtp(emailOrPhone: string, otp: string): Observable<any> {
        return this.http.post<LoginResponse>(`${this.baseUrl}${API_ENDPOINTS.USER_LOGIN}`, {
            mode: 'otp',
            emailOrPhone,
            otp
        }).pipe(
            tap(res => {
                if (res && res.token) {
                    this.storeToken(res.token);
                }
                if (res && res.user) {
                    this.setUser(res.user);
                }
            })
        );
    }

    loginWithPassword(email: string | null, password: string, phoneNumber: string | null): Observable<any> {
        const payload: any = {
            mode: 'password',
            password
        };

        if (email) {
            payload.email = email;
        }

        if (phoneNumber) {
            payload.phoneNumber = phoneNumber;
        }

        return this.http.post<LoginResponse>(`${this.baseUrl}${API_ENDPOINTS.USER_LOGIN}`, payload)
            .pipe(
                tap(res => {
                    if (res && res.token) {
                        this.storeToken(res.token);
                    }
                    if (res && res.user) {
                        this.setUser(res.user);
                    }
                })
            );
    }

    storeToken(token: string): void {
        this.cookieService.set(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return this.cookieService.get(this.TOKEN_KEY);
    }

    setUser(user: any): void {
        this.cookieService.set(this.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    getUser(): any {
        const userJson = this.cookieService.get(this.USER_KEY);
        try {
            return userJson ? JSON.parse(userJson) : null;
        } catch {
            return null;
        }
    }

    clearToken(): void {
        this.cookieService.delete(this.TOKEN_KEY);
        this.cookieService.delete(this.USER_KEY);
        this.currentUserSubject.next(null);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    ensureLoggedIn(returnUrl?: string): boolean {
        let authorized = this.isLoggedIn()
        if (!authorized) {
            const finalReturnUrl = returnUrl || (window.location.pathname + window.location.search);
            this.router.navigate(['/login'], { queryParams: { returnUrl: finalReturnUrl } });
            return false;
        }
        return true;
    }
}
