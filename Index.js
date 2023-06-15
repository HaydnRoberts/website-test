function textScroller(text, blanks = 8) {
  let list = text.split('');
  let finList = []
  for (let i = 0; i < blanks; i++) {
    list.push(' ');
  }
  for (let i = 0; i < list.length; i++) {
    list.push(list.shift())
    finList.push(list.join(''))
  }
  return finList
}

function titleScroller() {
  let scroller = textScroller("Wee Woo Wee Woo Wee Woo Wee Woo Wee Woo ", 0);
  let i = 0
  setInterval(function () {
    $('#title').text(scroller[i])
    i = i + 1
    if (i >= scroller.length) {
      i = 0
    }
  }, 250);
};
titleScroller();

function turtleScroller() {
  let scroller = textScroller("Haydn Roberts ", 0);
  let i = 0
  setInterval(function () {
    $('#turtle').text(scroller[i])
    i = i + 1
    if (i >= scroller.length) {
      i = 0
    }
  }, 250);
};
turtleScroller();

function homeScroller() {
  let scroller = textScroller("Home Home Home Home Home Home Home ", 0);
  let i = 0
  setInterval(function () {
    $('#home').text(scroller[i])
    i = i + 1
    if (i >= scroller.length) {
      i = 0
    }
  }, 250);
};
homeScroller();

function peepsScroller() {
  let scroller = textScroller("People People ", 0);
  let i = 0
  setInterval(function () {
    $('#peeps').text(scroller[i])
    i = i + 1
    if (i >= scroller.length) {
      i = 0
    }
  }, 250);
};
peepsScroller();

function weeWoo() {
  alert("wee woo wee woo");
}