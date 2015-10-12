/**
 * Custom Angular Filters
 */
App.filter('capitalize', function() {
    return function( input ) {
        return input ? input.charAt(0).toUpperCase() + input.slice(1) : '';
    }
});

App.filter('dateFormat', ['$filter', function($filter) {
    var millisPerMinute = 60 * 1000;
    var millisPerHour = 60 * millisPerMinute;

    return function( date, format ) {
        if( !date ) return "";
        var now = new Date();
        var millis = now.getTime() - (date.getTime ? date.getTime() : date);
        if( millis < millisPerMinute ) {
            return "Moments ago";
        } else if( millis < millisPerHour ) {
            return Math.round( millis / millisPerMinute ) + " minutes ago";
        } else if( millis < 24 * millisPerHour ) {
//            return Math.round( millis / millisPerHour ) + ' hours ago';
            return $filter('date')(date, 'shortTime');
        } else {
            return $filter('date')(date, format);
        }
    }
}]);

App.filter('gender', function() {
    return function( gender ) {
        if( gender ) {
            if( gender.toUpperCase() == 'M' ) {
                return 'Male';
            } else if( gender.toUpperCase() == 'F' ) {
                return 'Female';
            } else {
                return 'Unknown';
            }
        } else {
            return "";
        }
    }
});

App.filter('possessive', function() {
    return function( name ) {
        if( name ) {
            if( name.lastIndexOf('s') == name.length - 1 ) {
                return name + "'";
            } else {
                return name + "'s";
            }
        } else {
            return "";
        }
    }
});

App.filter('sign', function() {
    return function( value ) {
        if( value > 0 ) {
            return "+" + value;
        } else if( value < 0 ) {
            return "" + value;
        } else {
            return value;
        }
    }
});

App.filter('moduleColor', function() {
    return function( moduleNumber ) {

        if(moduleNumber !== undefined && !isNaN(parseInt(moduleNumber))){

            moduleNumber = moduleNumber%10;

           switch(moduleNumber){
               case 0:
                   return "modColor1";
                   break;
               case 1:
                   return "modColor2";
                   break;
               case 2:
                   return "modColor3";
                   break;
               case 3:
                   return "modColor4";
                   break;
               case 4:
                   return "modColor5";
                   break;
               case 5:
                   return "modColor6";
                   break;
               case 6:
                   return "modColor7";
                   break;
               case 7:
                   return "modColor8";
                   break;
               case 8:
                   return "modColor9";
                   break;
               case 9:
                   return "modColor10";
                   break;
               default:
                   return "modColor1";
           }
        }
        return "";
    }
});

App.filter('moduleTextColor', function() {
    return function( moduleNumber ) {

        if(moduleNumber !== undefined && !isNaN(parseInt(moduleNumber))){

            moduleNumber = moduleNumber%10;

            switch(moduleNumber){
                case 0:
                    return "modTextColor1";
                    break;
                case 1:
                    return "modTextColor2";
                    break;
                case 2:
                    return "modTextColor3";
                    break;
                case 3:
                    return "modTextColor4";
                    break;
                case 4:
                    return "modTextColor5";
                    break;
                case 5:
                    return "modTextColor6";
                    break;
                case 6:
                    return "modTextColor7";
                    break;
                case 7:
                    return "modTextColor8";
                    break;
                case 8:
                    return "modTextColor9";
                    break;
                case 9:
                    return "modTextColor10";
                    break;
                default:
                    return "modTextColor1";
            }
        } else {
            return "";
        }
    }
});

App.filter('passwordClass', function() {
    return function(passwordStrength) {

        if(passwordStrength !== undefined){

            switch(passwordStrength){
                case "Weak":
                    return "weak-password";
                    break;
                case "Medium":
                    return "medium-password";
                    break;
                case "Strong":
                    return "strong-password";
                    break;
                default:
                    return "weak-password";
            }
        } else {
            return "";
        }
    }
});

App.filter('numericToWord', function() {
    return function( moduleNumber ) {

        if(moduleNumber !== undefined && !isNaN(parseInt(moduleNumber))){

            switch(moduleNumber){
                case 1:
                    return "one";
                    break;
                case 2:
                    return "two";
                    break;
                case 3:
                    return "three";
                    break;
                case 4:
                    return "four";
                    break;
                case 5:
                    return "five";
                    break;
                case 6:
                    return "six";
                    break;
                case 7:
                    return "seven";
                    break;
                case 8:
                    return "eight";
                    break;
                case 9:
                    return "nine";
                    break;
                case 10:
                    return "ten";
                    break;
                default:
                    return moduleNumber;
            }
        } else {
            return "";
        }
    }
});

App.filter('truncateText', function () {
    return function (input, chars, breakOnWord) {
        if (isNaN(chars)) return input;
        if (chars <= 0) return '';
        if (input && input.length > chars) {
            input = input.substring(0, chars);

            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                //get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            }else{
                while(input.charAt(input.length-1) === ' '){
                    input = input.substr(0, input.length -1);
                }
            }
            return input + '...';
        }
        return input;
    };
});

App.filter('zeroToOne', function() {
    return function( number ) {
        return number >= 0 ? number + 1 : 0;
    }
});

App.filter('digit', function() {
    return function( number, placeValue ) {
        return Math.floor( (number % Math.pow( 10, placeValue )) / Math.pow( 10, placeValue - 1) );
    }
});