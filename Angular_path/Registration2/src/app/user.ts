export class User {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password_confirm: string;
        street_address: string;
        unit_apt: string;
        city: string;
        state: string;
        lucky: boolean;
        created_at: Date = new Date();
        updated_at: Date = new Date();
  }
