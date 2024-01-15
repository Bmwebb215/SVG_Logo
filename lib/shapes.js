class Shape {
    constructor(color){
        this.color =  color
    }

    setColor(color){
        this.color= color
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 1 250, 184 50, 185" style="fill:${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect width="300" height="200" style="fill:${this.color}"/>`
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle};