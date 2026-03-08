import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';
import { CheckoutItem } from '../../dtos/CheckoutItem';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private baseUrl = environment.baseUrl;
    private stripePromise: Promise<Stripe | null>;

    constructor(private http: HttpService) {
        // Initialize Stripe once, making it reusable across the app
        this.stripePromise = loadStripe(environment.stripe?.publicKey || '');
    }

    checkout(items: CheckoutItem[]): Observable<{ session?: { id?: string; url?: string } }> {
        return this.http.post<{ session?: { id?: string; url?: string } }>(
            `${this.baseUrl}${API_ENDPOINTS.CHECKOUT}`,
            items
        );
    }

    async redirectToCheckout(sessionId: string) {
        const stripe = await this.stripePromise;
        if (stripe) {
            (stripe as any).redirectToCheckout({ sessionId });
        } else {
            console.error('Stripe has not been initialized properly.');
        }
    }
}
