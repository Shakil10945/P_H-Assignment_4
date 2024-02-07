function checkName(name) {
    x = name.length;
    if (typeof(name) == 'string'){
        if(name[x-1] == 'a' || name[x-1] == 'e' || name[x-1] == 'i' || name[x-1] == 'o' || name[x-1] == 'u' || name[x-1] == 'y' || name[x-1] == 'w' || name[x-1] == 'A' || name[x-1] == 'E' || name[x-1] == 'I' || name[x-1] == 'O' || name[x-1] == 'U' || name[x-1] == 'Y'|| name[x-1] == 'W'){
            return 'Good Name';
        }
        else{
            return 'Bad Name';
        }
    }
    else{
        return 'invalid';
    }
}

console.log(checkName(60));