const display = document.querySelector('.ansbox')
const buttons = document.querySelectorAll('button')
// const clear = document.querySelector('.clear')

let displayvalue = ''
let output = ''
let ans='';
buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        displayvalue = e.target.innerHTML;
        if (displayvalue == '') {
            display.value = '';
        }
        else if (displayvalue == '=' && displayvalue!='%') {
            
            if(output!=''){
                output = eval(output);
            display.value = output;
            }
            else{
                output=""
                display.value=output
            }
            if (displayvalue == '+' || displayvalue == '-' || displayvalue == 'X' || displayvalue == '/' || displayvalue == '%') {
                output += e.target.innerHTML;
                display.value = output;
            }
        }
        else if (displayvalue == 'X') {
            var act='',b='';
            act=output;
            b=act.charAt(act.length-1);
            if(b==''){
                output=''
                display.value=output
            }
            if(b=='+'||b=='/'||b=='-'||b=='*'||b=='%'){
                output=act.substring(0,act.length-1)
                output+='*';
                display.value=output
            }
            else{
                output+='*'
                display.value=output
            }
        }
        else if (displayvalue == 'AC') {
            output = "";
            display.value = output;
        }
        else if (displayvalue == 'DEL') {
            ans=output;
            output = ans.substring(0, ans.length - 1);
            display.value = output;
        }
        else if(displayvalue == '+'){
            var act='',b='';
            act=output;
            b=act.charAt(act.length-1);
            if(b==''){
                output=''
                display.value=output
            }
            if(b=='+'||b=='/'||b=='-'||b=='X'||b=='%'){
                output=act.substring(0,act.length-1)
                output+='+';
                display.value=output
            }
            else{
                output+='+'
                display.value=output
            }
        }
        else if(displayvalue == '-'){
            var act='',b='';
            act=output;
            b=act.charAt(act.length-1);
            if(b==''){
                output=''
                display.value=output
            }
            if(b=='+'||b=='/'||b=='-'||b=='*'||b=='%'){
                output=act.substring(0,act.length-1)
                output+='-';
                display.value=output
            }
            else{
                output+='-'
                display.value=output
            }
        }
        else if(displayvalue == '/'){
            var act='',b='';
            act=output;
            b=act.charAt(act.length-1);
            if(b==''){
                output=''
                display.value=output
            }
            if(b=='+'||b=='/'||b=='-'||b=='*'||b=='%'){
                output=act.substring(0,act.length-1)
                output+='/';
                display.value=output
            }
            else{
                output+='/'
                display.value=output
            }
        }
        else if(displayvalue == '%'){
            var act='',b='';
            act=output;
            b=act.charAt(act.length-1);
            if(b==''){
                output=''
                display.value=output
            }
            if(b=='+'||b=='/'||b=='-'||b=='*'||b=='%'){
                output=act.substring(0,act.length-1)
                output+='%';
                display.value=output
            }
            else{
                output+='%'
                display.value=output
            }
        }
        else {
            output += e.target.innerHTML;
            display.value = output;
        }

        
    })
});