//1. Create a button on a web page. Use the .click() method to display an 
//alert message to the user indicating that the button has been clicked 
//when the button is actually clicked. 

//2. Create a button on a web page. Attach the click event using the .bind() 
//method to display an alert message to the user indicating that the button 
//has been clicked when the button is actually clicked. 

//3. Create a button on a web page. Attach the click event using the .on() 
//method to display an alert message to the user indicating that the button 
//has been clicked when the button is actually clicked. 

//4. Create two buttons on a web page. Attach the click event to both buttons 
//using a single handler using the .on() method. Again, an alert message 
//should be displayed to the user indicating that a button has been clicked 
//when either of the buttons are actually clicked. 

//5. Create a div on a web page. Use jQuery to set the div element to 400px wide 
//and 400px high. Attach the click, mouseenter, and mouseleave events using the 
//.on() method. Display an alert message to the user indicating that the div was 
//either clicked on, the mouse entered it, or the mouse left it. 

//6. Rewrite the code from number 5. This time add a span tag to the web page. 
//Display three different messages within the span tag when the user enters 
//the div, leaves the div, or clicks on the div.

//7. Create a link within the web page and set its href attribute to browse to 
//google.com. When the user clicks the link, first, prevent it from redirecting 
//to that web site. Second, programmatically style the link so that its color 
//changes to red. Third, display the name of the node that triggered the event 
//within an alert box.

//8. Create a div tag within the web page. As the user resizes the browser, display 
//the width and height of the browser window within the div tag.

//9. Create a text field using the <input> tag. When the input has focus, 
//set the background to a light gray color. When the input does not have 
//focus, reset the background back to a white color.

$(document).ready(function(){
	//problem 1
	$('.button1').click(function(){
		alert('Button 1 has been clicked');
	});	

	//problem 2
	$('.button2').bind('click', function() {
		alert('Button 2 has been clicked');
	});

	//problem 3
	$('.button3').on('click', function() {
		alert('Button 3 has been clicked');
	});

	//problem 4
	$('.button4, .button5').on('click', function() {
		alert('Button 4 or button 5 has been clicked');
	});


	//problem 5
	//$('.move').css('height', '200px').css('width','200px').css('background-color','#009999');
	//$('.move').on('click mouseenter mouseleave', function() {
		//alert('The mouse has clicked, hovered over or left the div');
	//});

	//problem 6
	$('.move').css('height', '200px').css('width','200px').css('background-color','#009999');
	$('.move').on({
		click: function(){$('.message').prepend('<p>You clicked the div</p>');},
		mouseenter: function(){$('.message').prepend('<p>The mouse hovered over the div</p>');},
		mouseleave: function(){$('.message').prepend('<p>The mouse has left the div</p>');}
	});

	//problem 7
	$('a').click(function () {
		event.preventDefault();
		$('a').css('color','red');
		alert(event.currentTarget + ' triggered the event');
	});

	//problem 8
	$(window).resize(function() {
		$('.size').text('The window size is ' + $(window).width() + ' ' + $(window).height());
	});

	//problem 9
	$('.gray').on({
		focus: function(){$('input').css('background-color','lightgray');},
		blur: function(){$('input').css('background-color','white');}
	});
//10.  Add a form tag within a web page complete with 2 input fields: one that 
//collects name and a second that collects an email. Add a submit button. 
//When the user submits the form, if any one of the two fields is left empty, 
//display an alert box to the user indicating that the fields are required. 
//Give the field that the user left empty a red border. If both fields have 
//values in them, set their borders to green.

	$('.happy').click(function(){
		if ($('.name').val() === '' && $('.email').val() === '') {
			$('.input').css('border','1px solid red');
			alert('name and email are required');
		} else if ($('.email').val() === '') {
			$('.email').css('border','1px solid red');
			alert('email is required');
		} else if ($('.name').val() === '') {
			$('.name').css('border','1px solid red');
			alert('name is required');
		} else {
			$('.input').css('border','1px solid green');
		}
	});
	
});
