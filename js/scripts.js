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
			console.log(questions);
			console.log(answers);
			$('#quizQuestions').val(questions);
			$('#quizAnswers').val(answers);
		}
	})
});