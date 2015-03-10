$(function() {
	$.ajax({
		url : 'js/questions.json',
		success : function(data) {
			var questions = [];
			var answers = [];
			$.each(data, function() {
				questions.push(this.question);
				answers.push(this.answer);
			});
			$('#quizQuestions').val(questions);
			$('#quizAnswers').val(answers);
		}
	})
});