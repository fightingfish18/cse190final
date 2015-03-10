$(function() {
	$.ajax({
		url : 'js/questions.json',
		success : function(response) {
			response = $.parseJSON(response);
			var questions = [];
			var answers = [];
			
			for (var i = 0; i < response.length; i++) {
				questions.push(response[i].question);
				answers.push(response[i].answer);
			}
			$('#quizQuestions').val(questions);
			$('#quizAnswers').val(answers);
		}
	})
});