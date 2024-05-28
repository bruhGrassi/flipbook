import { Component } from '@angular/core';
// import $ from "jquery";
// import * as $ from 'jquery';
// import 'turn.js'
import 'js1/turn.js'
// declare const teste:any;
declare const $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flipbook';
  callfun(){
    // teste();
    (function($){})
  }

  goRight(){
    document.getElementById('wrapper').style.marginLeft = '10%';
  }

  ngOnInit() {

    // $(window).click(function(){
    //   alert('clicou');
    //    });

    $( window).ready(function() {
      $("#magazine").turn({
        autoCenter: true,
        display: 'double',
        acceleration: true,
        gradients: !$.isTouch,
        elevation:50,      
      });

      $(window).bind('keydown', function(e){
        
        if (e.keyCode==37)
          $('#magazine').turn('previous');
        else if (e.keyCode==39)
          $('#magazine').turn('next');       
      });    
    })
  } 
  



}
