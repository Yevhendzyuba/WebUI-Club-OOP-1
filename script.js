class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        let [firstName, lastName] = this.fullName.split(' ');
        return [firstName, lastName];
    }
    nameInculdes(data) {
        const [firstName] = this.showFullName();
        console.log(data.includes(firstName));
        return firstName;
    }
    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
}

let stud1 = new Student("Ivan Petrenko", "web");
let stud2 = new Student("Sergiy Koval", "python");
let stud3 = Student.studentBuilder();