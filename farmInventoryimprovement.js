f u n c t i o n p r i n t Z e r o P a d d e d W i t h L a b e l ( number , label ) {
var n u m b e r S t r i n g = S t r i n g ( n u m b e r ) ;
while ( n u m b e r S t r i n g . l e n g t h < 3)
n u m b e r S t r i n g = "0" + n u m b e r S t r i n g ;
c o n s o l e . log ( n u m b e r S t r i n g + " " + label ) ;
}
f u n c t i o n p r i n t F a r m I n v e n t o r y ( cows , chickens , pigs ) {
p r i n t Z e r o P a d d e d W i t h L a b e l ( cows , " Cows ") ;
p r i n t Z e r o P a d d e d W i t h L a b e l ( chickens , " C h i c k e n s ") ;
p r i n t Z e r o P a d d e d W i t h L a b e l ( pigs , " Pigs ") ;
}
p r i n t F a r m I n v e n t o r y (7 , 11 , 3) ;
f u n c t i o n z e r o P a d ( number , width ) {
var s t r i n g = S t r i n g ( n u m b e r ) ;
while ( s t r i n g . l e n g t h < width )
s t r i n g = "0" + s t r i n g ;
r e t u r n s t r i n g ;
}
f u n c t i o n p r i n t F a r m I n v e n t o r y ( cows , chickens , pigs ) {
c o n s o l e . log ( z e r o P a d ( cows , 3) + " Cows ") ;
c o n s o l e . log ( z e r o P a d ( chickens , 3) + " C h i c k e n s ") ;
c o n s o l e . log ( z e r o P a d ( pigs , 3) + " Pigs ") ;
}
p r i n t F a r m I n v e n t o r y (7 , 16 , 3) ;