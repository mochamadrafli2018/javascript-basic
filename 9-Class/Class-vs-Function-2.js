// Class
class Mail {
    constructor(author) {
        this.from = 'pengirim@dicoding.com';
        console.log('is instantiated', author);
    };
}
new Mail('omar')
// Output : is instantiated Omar

// Function
function Mail2(author) {
    this.from = author;
    console.log('is instantiated', author);
}
Mail2('Omar')
//Output : is instantiated Omar
