import { environment } from '../environments/environment';

const base_url = environment.base_url;

export class Usuario {
    constructor(
        public nombre: string = '',
        public email: string = '',
        public password: string = '',
        public img: string = '',
        public google: boolean = false,
        public role: 'ADMIN_ROLE' | 'USER_ROLE' = 'USER_ROLE',
        public uid: string = ''
    ) {}

    get imageUrl(): string {
        const defaultImageUrl = `${base_url}/upload/usuarios/no-image`;
        
        if (!this.img || this.img.startsWith('https://')) {
            return this.img || defaultImageUrl;
        } else {
            const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            const extension = this.img.substring(this.img.lastIndexOf('.')).toLowerCase();
            
            if (validImageExtensions.includes(extension)) {
                return `${base_url}/upload/usuarios/${this.img}`;
            } else {
                console.error('Invalid image format');
                return defaultImageUrl;
            }
        }
    }

    isValidEmail(email: string): boolean {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
