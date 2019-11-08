//builing a library, class and Inheritance practice

class Media{
  constructor(title){
    this._title=title;
    this._ratings=[];
    this._isCheckedOut=false;
  }
  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
    
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, ratings) => currentSum + ratings, 0);
    const lengthOfArray = this._ratings.length;  
    return ratingsSum / lengthOfArray;
    
  }
  
  addRating(value){
    this._ratings.push(value);
  }
}

class Book extends Media {
constructor(author,title,pages){
  super(title);
  this._pages=pages ;
  this._author=author;  
}  
  get pages(){
    return this._pages;
  }
  get author(){
    return this._author;
  }
}
class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director=director;
    this._runtime=runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runtime;
  }
}
const historyOfEverything= new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);
