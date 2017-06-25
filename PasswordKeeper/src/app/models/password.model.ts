export class FirebaseFlatSnapshot {
    public $key?: string;

    constructor(obj?: any) {
        if (obj && obj.$key) {
            this.$key = obj.$key;
        }
    }
}

export class Password extends FirebaseFlatSnapshot{
    public service: string;
    public username: string;
    public passwrod: string;

    constructor(obj?: any) {
        super(obj);
        this.service = obj && obj.service || "";
        this.username = obj && obj.username || "";
        this.passwrod = obj && obj.passwrod || "";
    }
}