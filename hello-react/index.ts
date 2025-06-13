interface User{
    name: string;
    id: number;
    isAdmin: boolean;
}

let newUser: User ={
    name: "Jane",
    id: 2,
    isAdmin: false
}
function addUser(user: User): string {
    return user.name + " added successfully";
}