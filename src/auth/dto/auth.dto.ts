export class AuthDto {
    id: string;
    email: string;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
    }

}