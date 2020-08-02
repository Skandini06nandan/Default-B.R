  
class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('SUBMIT');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.greeting1 = createElement('h2');
      
    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  
    }
  
    display(){
      this.title.html("Book Radar");
      this.title.position(550, 20);
  
     
      this.input.position(530 ,80);
      this.button.position(570, 120);
     
  
      this.button.mousePressed(()=>{
        this.greeting.html("Please Make your first entry");
        this.greeting.position(470, 60);
        this.record = createButton('ADD');
        this.record.position(590,120);
        this.input.hide();
        this.button.hide();

        this.record.mousePressed(()=>{
          this.record.hide();
          this.greeting.hide();
        
          this.title.html('RECORD I')
          this.b =createInput();
          this.a =createInput();
          this.p =createInput();
          this.s =createInput();
          this.specific =createInput('Anything specific');
          this.input5 =createInput('(optional)');
  
          this.book =createButton('Book"s Name');
          this.author=createButton('Authors Name');
          this.page =createButton('Total Pages')
          this.shelf= createButton('Shelf no.');
          this.extras =createButton('for adding more books/files');
          this.add =createButton('+')
          this.save=createButton('SAVE');

          this.book.position(80,80);
          this.author.position(80,120);
          this.page.position(80,160);
          this.shelf.position(80,200);
          this.save.position(80,400);
          this.extras.position(180,300);
      
          this.b.position(200,80);
          this.a.position(200,120);
          this.p.position(200,160);
          this.s.position(200,200);
          this.save.position(240,350);
      
          this.specific.position(80,240);
          this.input5.position(200,240);
          this.add.position(250,280);

          this.save.mousePressed(()=>{
            this.book.hide();
            this.save.hide();
           this.author.hide() ;
           this.page.hide() ;
           this.shelf.hide();
           this.extras.hide();
           this.b.hide();
           this.a.hide() ;
           this.p.hide();
           this.s.hide()  
           this.specific.hide() ;
           this.input5.hide();
           this.add.hide()     
            this.greeting1.html("Record Added");
            this.greeting1.position(540,100);
          });

        });
        
      });
  
     
  
    }
  }