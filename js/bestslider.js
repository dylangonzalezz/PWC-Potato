(function($) {

  var left = 0;
  var middle = 1;
  var right = 2;

  var slideintodms = function() {
    return new slideintodms.init();
  };

  var rotate = function(leftright, array) {
    //Handle empty values
    array = array || [];

    var result = [];
    var left2;
    var middle2;
    var right2;

    if (array.isArray) {
      return;
    }

    if (leftright) {
    left = left + 1;
    middle = middle + 1;
    right = right + 1;
    }

    if (!leftright) {
    left = left - 1;
    middle = middle - 1;
    right = right - 1;
    }

    if (left % 3 == 3 || left % 3 == 0) {
      left2 = 0;
    }
    else if (left % 3 == -2 || left % 3 == 1) {
      left2 = 1;
    }
    else if (left % 3 == 2 || left % 3 == -1) {
      left2 = 2;
    }
    else {
      left2 = left2;
    }

    if (middle % 3 == 3 || middle % 3 == 0) {
      middle2 = 0;
    }
    else if (middle % 3 == -2 || middle % 3 == 1) {
      middle2 = 1;
    }
    else if (middle % 3 == 2 || middle % 3 == -1) {
      middle2 = 2;
    }
    else {
      middle2 = middle2;
    }


    if (right % 3 == 3 || right % 3 == 0) {
      right2 = 0;
    }
    else if (right % 3 == -2 || right % 3 == 1) {
      right2 = 1;
    }
    else if (right % 3 == 2 || right % 3 == -1) {
      right2 = 2;
    }
    else {
      right2 = right2;
    }

    result = [left2, middle2, right2];
    console.log(result);
    return result;
  }

  slideintodms.prototype = {

    getAllSliders: function() {

      var slidermatrix = [];
      var slidercontent = [];

      //Select all elements with div.c-slider
      slides = $("div.sliderbaby");
      slides.css({width: "140%", height: "200px", right: "20%", position:"relative", overflow: "hidden"});

      //Does something for each array value slides
      for (var a = 0; a < slides.length; a++) {

        slidercontent[a] = new Array;

        slidermatrix[a] = new Array;

        //If the divs in the div with ".sliderbaby" are less than 3, it ends.
        if ($("div.sliderbaby:eq(" + a + ")").children().length < 3) {
          console.log("END");
          return;
        }

        //Does something for each child elemnt of each slides array value
        for (var b = 0; b < $("div.sliderbaby:eq(" + a + ")").children().length; b++) {
          slidermatrix[a][b] = $("div.sliderbaby:eq(" + a + ") div:eq(" + b + ")");

          slidercontent[a][b] = slidermatrix[a][b].children();

          this.slides = slidermatrix;
          this.slidecontent = slidercontent;
          console.log(this.slides);
        }
      }
    },

    buttonhandler: function() {
      //var aa = function(x) {this.setstylerotation(+1, x) }
      console.log("Making Buttons");
      var divarray = this.slides;
      var divcontent = this.slidecontent;
      //aa(1);

      for (var i = 0; i < slides.length; i++) {
        console.log(i);

        //Dynamicly adds 2 Buttons
        var l = $('<div style="width:100px; height: 50px; left: 30%; bottom: 130px; position: absolute; background-color: #7f6850; -webkit-clip-path: polygon(33% 0, 8% 50%, 35% 100%, 25% 100%, 0% 50%, 25% 0%); clip-path: polygon(33% 0, 8% 50%, 33% 100%, 25% 100%, 0% 50%, 25% 0%);"> </div>').addClass("slideNjsbuttonright" + i);
        var r = $('<div style="width:100px; height: 50px; right: 30%; bottom: 130px; position: absolute; background-color: #7f6850; -webkit-clip-path: polygon(33% 0, 8% 50%, 35% 100%, 25% 100%, 0% 50%, 25% 0%); clip-path: polygon(75% 0, 100% 50%, 75% 100%, 67% 100%, 92% 50%, 67% 0%);"> </div>').addClass("slideNjsbuttonleft" + i);

        $(slides[i]).append(r);
        $(slides[i]).append(l);
        createhandle(i);

      }

      function createhandle(i) {

        $(".slideNjsbuttonright" + i).click(function() {
          for (var j = 0; j < divarray.length; j++) {
            console.log(i);
            divarray[i][j].css({display: "none"});
          }

          x = rotate(true, divarray[i]);
          divarray[i][x[0]].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            "text-align": "center",
            display: "inline-block"
          }).html(divcontent[i][x[0]]);

          divarray[i][x[1]].css({
            width: "33%",
            display: "inline-block",
            "text-overflow": "clip",
            "text-align": "center",
            display: "inline-block"
          }).html(divcontent[i][x[1]]);

          divarray[i][x[2]].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            display: "inline-block",
            "text-align": "center"
          }).html(divcontent[i][x[2]]);

        });

        $(".slideNjsbuttonleft" + i).click(function() {

          for (var j = 0; j < divarray.length; j++) {
            console.log(i);
            divarray[i][j].css({display: "none"});
          }

          x = rotate(false, divarray[i]);

          console.log(x);

          divarray[i][x[0]].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            display: "inline-block",
            "text-align": "center"
          }).html(divcontent[i][x[0]]);
          divarray[i][x[1]].css({
            width: "33%",
            display: "inline-block",
            "text-overflow": "clip",
            display: "inline-block",
            "text-align": "center"
          }).html(divcontent[i][x[1]]);
          divarray[i][x[2]].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            display: "inline-block",
            "text-align": "center"
          }).html(divcontent[i][x[2]]);
        });

      }

    },

    // convertAllSliders: function() {
    //   console.log("converting all Sliders");
    //   var slidermatrix = [];
    //
    //   //Select all elements with div.c-slider
    //   slides = $("div.sliderbaby");
    //
    //   //Does something for each array value slides
    //   for (var a = 0; a < slides.length; a++) {
    //
    //     slidermatrix[a] = new Array;
    //
    //     //If the divs in the div with ".sliderbaby" are less than 3, it ends.
    //     if ($("div.sliderbaby:eq(" + a + ")").children().length < 3) {
    //       return;
    //     }
    //
    //     //Does something for each child elemnt of each slides array value
    //     for (var b = 0; b < $("div.sliderbaby:eq(" + a + ")").children().length; b++) {
    //       //console.log($("div.sliderbaby:eq(" + a + ")"));
    //       slidermatrix[a][b] = $("div.sliderbaby:eq(" + a + ") div:eq(" + b + ")");
    //       //console.log($("div.sliderbaby:eq(" + a + ") div:lt(" + (b + 1) + ")"));
    //       this.slides = slidermatrix;
    //     }
    //     //slidermatrix[1].css("background-color", "blue");
    //   }
    //
    //   return this;
    // },

    setstylerotation: function(nr, slidernr) {
        //Give the rotateby variable a default value
        var rotateby = nr || 0;
        slidernr = slidernr || 0;

        //Check if the rotateby variable is a Number
        if (rotateby.isNumeric) {
          return;
        }

        //Gets this.slides
        var divarray = this.slides;
        var divcontent = this.slidercontent;

        //var x;
        var y;

        console.log("Initializing")
        //Cycle for each div with the ".sliderbaby" class.
        for (var i = 0; i < divarray.length; i++) {

          //Cycle for each div in the div with the ".sliderbaby" class.
          for (var j = 0; j < divarray[i].length; j++) {
            divarray[i][j].css({display: "none"});
          }

          divarray[i][0].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            "text-align": "center",
            display: "inline-block"
          });

          divarray[i][1].css({
            width: "33%",
            display: "inline-block",
            "text-overflow": "clip",
            "text-align": "center",
            display: "inline-block"
          });

          divarray[i][2].css({
            width: "33%",
            display: "inline-block",
            opacity: "0.5",
            "text-overflow": "clip",
            "text-align": "center",
            display: "inline-block"
          });
        }

        return this;
      }

  };

  slideintodms.init = function() {
    this.slides = []
    this.slidecontent = [];
  };

  slideintodms.init.prototype = slideintodms.prototype;

  this.slideintodms = window.slideintodms = slideintodms();

  // slideintodms.getAllSliders;

}(jQuery))

var start = (function() {
    var slider = slideintodms;
    slider.getAllSliders();
    //slider.convertAllSliders();
    slider.setstylerotation();
    slider.buttonhandler();
    return;
})

start();
