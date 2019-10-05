class Turtle {
    
    constructor(x,y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.coordinates = [[x,y]];
        this.direction = "East";
    }


    // methods for turning and moving the turtle
    

    forward(stepsForward) {
        let x = this.x;
        let y = this.y;
        
        if (this.direction == "East") {
            
            for (let i = x + 1; i <= x + stepsForward; i++) {
                this.coordinates.push([i, y]);
            }
            
            this.x = x + stepsForward;   
            return this;

            
        } else if (this.direction == "West") {

            for (let i = x - 1; i >= x - stepsForward; i--) {
                this.coordinates.push([i, y]);
            }

            this.x = x - stepsForward;
            return this;

 
        } else if (this.direction == "North") {
            
            for (let i = y + 1; i <= y + stepsForward; i++) {
                this.coordinates.push([x, i]);
            }

            this.y = y + stepsForward;
            return this;


        } else /* (this.direction == "South") */ {
           

            for (let i = y - 1; i >= y - stepsForward; i--) {
                this.coordinates.push([x, i]);
            }

            this.y = y - stepsForward;
            return this;

        }
        
    }


    left() {

        let direction = this.direction;
        switch(direction) {
            
            case "North":
                this.direction = "West";
                console.log('franklin is now facing West')
                break;
            case "East":
                this.direction = "North";
                console.log('franklin is now facing North');
                break;
            case "South":
                this.direction = "East";
                console.log('franklin is now facing East');
                break;
            case "West":
                this.direction = "South";
                console.log('franklin is now facing South');
                break;
        }
        return this;
    }

    
    right() {

        let direction = this.direction;
        switch(direction) {
            
            case "North":
                this.direction = 'East';
                console.log('franklin is now facing East')
                break;
            case "East":
                this.direction = 'South';
                console.log('franklin is now facing South');
                break;
            case "South":
                this.direction = 'West';
                console.log('franklin is now facing West');
                break;
            case "West":
                this.direction = 'North';
                console.log('franklin is now facing North');
                break;
        }
        return this;
    }
    
    
    // methods to determine x and y axis dimensions to be used in print method
    
    
    lowestXCoordinate(){
        let lowestXCoordinate = 0;
        let coordinates = this.coordinates;
        // console.log(coordinates);
        for(let coordinate of coordinates) {
            if(coordinate[0] < lowestXCoordinate) {
                lowestXCoordinate = coordinate[0];
                // console.log(coordinate[0]); for debugging
            }
        }
        return parseInt(lowestXCoordinate);
    }
    

    highestXCoordinate(){
        let highestXCoordinate = 0;
        let coordinates = this.coordinates;
        for(let coordinate of coordinates) {
            if(coordinate[0] > highestXCoordinate) {
                // console.log(coordinate[0]); for debugging
                highestXCoordinate = coordinate[0];
            }
        }
        return parseInt(highestXCoordinate);
    }


    lowestYCoordinate(){
        let lowestYCoordinate = 0;
        let coordinates = this.coordinates;
        for(let coordinate of coordinates) {
            if(coordinate[1] < lowestYCoordinate) {
                lowestYCoordinate = coordinate[1];
                // console.log(coordinate[x]); for debugging
            }
        }
        return parseInt(lowestYCoordinate);
    }
    

    highestYCoordinate(){
        let highestYCoordinate = 0;
        let coordinates = this.coordinates;
        // console.log(coordinates);
        for(let coordinate of coordinates) {
            if(coordinate[1] > highestYCoordinate) {
                // console.log(coordinate[0]); for debugging
                highestYCoordinate = coordinate[1];
            }
        }
        return parseInt(highestYCoordinate);
    }

    // helper method for checking if the x and y coordinate ('item') provided by the nested for loops in the print method are present in the 'coordinates' array

    isInArray(arr, item){
        let item_as_string = JSON.stringify(item);
      
        let contains = arr.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
      }


    // methods for printing where the turtle has been

    allPoints() {
        console.log(this.coordinates);
    }


    print() {

        let lowX = this.lowestXCoordinate();
        let highX = this.highestXCoordinate();
        let lowY = this.lowestYCoordinate();
        let highY = this.highestYCoordinate();
        let gridCoordinate = [];
        let coordinatesStr = ``;
        
        for(let j = highY + 2; j >= lowY - 2; j--) {                // this for loop will run through the y axis from highest coordinate to lowest. The +/- 2 on the highY and lowY are to provide padding around the path of the turtle.
  
            for(let i = lowX - 2; i <= highX + 2; i++ ) {           // this for loop will run through the x axis from lowest coordinate to the highest. The +/- 2 on the highx and lowx are to provide padding around the path of the turtle.   
                
                gridCoordinate = [i,j];
                
                if (this.isInArray(this.coordinates, gridCoordinate)) {
                    // console.log('X');
                    coordinatesStr += 'T';
                } else {
                    coordinatesStr += ('X');
                }                    
            }  
            coordinatesStr += `\n`;                                                                         
        }
        

        console.log(coordinatesStr);
    }
}



// tests


let franklin = new Turtle(0,0, 'franklin');
console.log('franklin has been created');

franklin.forward(2);
console.log('franklin moved 2 steps forward');
franklin.left();
franklin.forward(2);
console.log('franklin moved 2 steps forward');
franklin.left();
franklin.forward(5);
console.log('these are all of the coordinates franklin has touched on his journey');
franklin.left()

// test for chained methods

// franklin.forward(3).right().forward(5).left().forward(3).left().forward(7);

console.log("this is the lowest x coordinate from franklin's journey");
console.log(franklin.lowestXCoordinate());
console.log("this is the highest x coordinate from franklin's journey");
console.log(franklin.highestXCoordinate());
console.log("this is the lowest y coordinate from franklin's journey");
console.log(franklin.lowestYCoordinate());
console.log("this is the highest y coordinate from franklin's journey");
console.log(franklin.highestYCoordinate());
franklin.allPoints();
franklin.print();