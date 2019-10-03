class Tabs{
  constructor(){
    this.tabList = document.querySelectorAll('.pageNav__tabItem');
    this.contentList = document.querySelectorAll('.tab_panel');
    let nav = document.querySelector('.main4');
   nav.addEventListener('click', e => this.show(e));
    
    this.setIndex();
  }
  
  show(e){
    let t = e.target;
    if (!t.classList.contains('pageNav__tabItem')) return;
    this.removePrev();
    
    let index = t.getAttribute('data-index');
    let content = document.querySelector('.tab_panel[data-index="'+index+'"]');
    
    t.classList.add('active');
    content.classList.add('active');
  }
  
  setIndex(){
    for (let i = 0; i < this.tabList.length; i++){ 
      this.tabList[i].setAttribute('data-index', i);
      this.contentList[i].setAttribute('data-index', i);
    }
  }
  
  removePrev(){
    for (let i = 0; i < this.tabList.length; i++){
      this.tabList[i].classList.remove('active');
      this.contentList[i].classList.remove('active');
    }
  }
  
}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new Tabs();
})