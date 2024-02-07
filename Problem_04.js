function password(obj) {
    if (typeof obj === 'object') {
        if (obj.hasOwnProperty( 'name' ) &&  obj.hasOwnProperty('birthYear' ) &&   obj.hasOwnProperty( 'siteName')) {
            if ((obj.birthYear).toString().length === 4) {
                const capi = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
                return capi + '#' + obj.name + '@' + obj.birthYear;
            }
            else {
                return 'invalid';
            }
        } 
        else {
            return 'invalid';
        }
    } 
    else {
        return 'invalid';
    }
}
console.log(password({ name: "mishu", siteName: "linkedin" , birthYear: 2002 }));
