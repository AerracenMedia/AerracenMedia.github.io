(function(){
  "use strict";

  ([
    {
      link:"http://google.com",
      title:"Google",
      description:"search engine extrordinaire."
    },
    {
      link:"http://yahoo.com",
      title:"Yahoo",
      description:"search engine with amazing QA site."
    },
    {
      link:"http://google.com",
      title:"Google",
      description:"search engine extrordinaire."
    },
    {
      link:"http://yahoo.com",
      title:"Yahoo",
      description:"search engine with amazing QA site."
    },
    {
      link:"http://google.com",
      title:"Google",
      description:"search engine extrordinaire."
    },
    {
      link:"http://yahoo.com",
      title:"Yahoo",
      description:"search engine with amazing QA site."
    }
  ])

  .forEach(function(item){
    $("#archive-list").append(
      $("<li class='expandable-archive collapsed'>" +
            "<a shref='"+item.link+"'>" +
              "<div class='title'>"+item.title+"</div>" +
            "</a>" +
            item.description +
        "</li>"
       )
    );
  });

  $(".expandable-archive").click(function(){
    var target = $(this),
        others = $(".expandable-archive").not(target);
    others.addClass("collapsed");
    target.addClass("expanded");
    others.removeClass("expanded");
    target.removeClass("collapsed");
    others.addClass("shrinkhide");
  });

}());
