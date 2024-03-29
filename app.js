class Media { 
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._rating = []
    }
  
    get title() {
      return this._title
    }
  
    get isCheckedOut(){
      return this._isCheckedOut
    }
  
    get ratings(){
      return this._rating
    }
  
     toggleCheckOutStatus(){
      // if(._isCheckedOut === true){
      //   return this._isCheckedOut = false
      // } 
      // else{
      //   return this.isCheckedOut = true
      // }
      this._isCheckedOut = !this._isCheckedOut
    }
  
    getAverageRating(){
      // const sum = ratings.reduce((accumulator, currentValue) => accumulator / currentValue, 0);
      let ratingSum = this._rating.reduce((accumulator,rating)=>accumulator + rating);
      return ratingSum / this.ratings.length
    }
  
    addRating(value){
      this.ratings.push(value)
    }
  
    set isCheckedOut(value){ 
      this._isCheckedOut = value
    }
  
  }
  
  
  class Book extends Media { 
    constructor(author,title,pages){
      super(title)
      this._author = author
      this._pages = pages
      this._isCheckedOut = false
      this._rating = []
    }
  
    get author(){
      return this._author
    }
  
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media{
    constructor(director,title,runTime){
      super(title)
      this._director = director
      this._runTime = 0
    }
  
    get director(){
      return this._director
    }
  
    get runTime(){
      return this._runTime 
    }
  }
  
  let historyOfEverything = new Book('Bill Bryson','A Short History Of Nearly Everything',544)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  console.log(historyOfEverything.getAverageRating())
  
  let speed = new Movie('Jan De Bont', 'Speed', 116)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  