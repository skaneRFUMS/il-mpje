var currentToc = 1;
var maxToc;

$(function() {
    $('.section').hide();
    maxToc = $('.section').length;
    
    addToc();
    gotoToc(1);
    //addDisclaimer();
});

function addToc() {
  let html = '<div class="toc"><a href="#" id="prevToc" onclick="prevToc(); return false;">&laquo;</a>';
  html += `<input id="tocNum" type="number" min="1" max="${maxToc}" onchange="gotoToc($(this).val()); return false;" value="${currentToc}" /> of ${maxToc}`;
  html += '<a href="#" id="nextToc" onclick="nextToc(); return false;">&raquo;</a></div>';
  $('header').append(html);
}

function prevToc() {
  gotoToc(currentToc-1);
}
function nextToc() {
  gotoToc(currentToc+1);
}
function gotoToc(num) {
  num = parseFloat(num);
  if (num>maxToc) { gotoToc(maxToc); }
  if (num<1) { gotoToc(1); }
  
  if (num==maxToc) {
    $('#nextToc').hide();
  } else {
    $('#nextToc').show();
  }
  
  if (num==1) {
    $('#prevToc').hide();
  } else {
    $('#prevToc').show();
  }
  
  
  currentToc = num;
  
  $('.section').hide();
  $($('.section')[currentToc-1]).show();
  $('#tocNum').val(currentToc);
}

function addDisclaimer() {
  let html = '<div style="font-size: 0.9em;>Some elements of the text may have been abbreviated to improve readability. See <a href="https://ilga.gov/legislation/ilcs/ilcs3.asp?ActID=1318&ChapterID=24&Print=True">(225 ILCS 85/) Pharmacy Practice Act</a> for the most accurate information.</div>'
  $('footer').append(html);
}