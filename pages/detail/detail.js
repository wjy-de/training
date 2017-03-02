app.controller('detailCtrl',['$scope',function($scope){
	
}])

app.directive('ngQus',function() {
	return {
		restrict:'AE',
		replace:true,
		link:function ($scope,el) {
			
			/*选答案效果*/
			var options = $('#detailP .options'); //答案选项
			/*单选判断效果*/
			function one (){
				options.on('touchend',function() {
					options.children('.left').removeClass('color');
					$(this).children('.left').addClass('color');
				})
			}
			
			/*多选效果*/
			function more () {
				options.on('touchend',function() {
					$(this).children('.left').toggleClass('color');
				})
			}
			
			/*
			 * flag用于判断是单选还是多选的标志
			 * flag为1:  表示是单选或者判断
			 * flag为2：表示是多选
			 */
			function selected (flag) {
				if(flag == 1) {
					one();
				}else if(flag == 2) {
					more();
				}
			}
			selected(1);
			/*选答案效果*/
			
			/*查看答案*/
			var lookBtn = $('#detailP #look');
			var answer = $('#detailP .answer').children('p');
			lookBtn.on('touchend',function() {
				answer.toggleClass('look');
			})
			
			
		}
	}
})