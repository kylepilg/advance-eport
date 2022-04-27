function isLoggedInAndSubscribed(loggedIn, subscribed) {
   // return num % 2 === 0 ? 1 : -1;
   return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIED' )
 
}

console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED' ));