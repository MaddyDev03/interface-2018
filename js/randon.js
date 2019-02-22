// JavaScript Document
var Quotation=new Array() // do not change this!

Quotation[0] = "Backup not found: (A)bort (R)etry (P)anic ";

Quotation[1] = "Oxymoron: Microsoft Works.";

Quotation[2] = "Believing in 6*9=42";

Quotation[3] = "The Truth is out there, Anyone got the URL ?";

Quotation[4] = "Our attitude isn't bad. It's in beta. ";
Quotation[5] = "Bugs come in through open Windows.  ";

var Q = Quotation.length;

var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation(){document.write(Quotation[whichQuotation]);}

showQuotation();