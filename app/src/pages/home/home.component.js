angular
    .module('home', [
        'note'
    ])
    .component('homeComponent', {
        templateUrl: 'pages/home/home.component.html',
        controller: HomeController
    });

HomeController.$inject = [];
function HomeController() {
    var $ctrl = this;
    // $scope.saved = localStorage.getItem('notes');
    // $scope.notes = (localStorage.getItem('notes')!==null) ? JSON.parse($scope.saved) : [ {text: 'TalkTalk test', title: ""},
    //     {text: 'Build an a note taking app', done: ""} ];
    // localStorage.setItem('notes', JSON.stringify($scope.notes));

    $ctrl.$onInit = function () {
        $ctrl.notes = [
            {
                position: {
                    x: 20,
                    y: 40
                },
                color: '#ffd6bc',
                header: "Note 1",
                text: "Test note 1"
            },
            {
                position: {
                    x: 500,
                    y: 40
                },
                color: '#fff8cd',
                header: "Note 2",
                text: "Test note 2"
            }
        ];
    };

    $ctrl.addNote = function($scope) {


        var allNotes = document.getElementsByTagName("note-component");
        var lastNotes = allNotes[allNotes.length-1];
        var rect = lastNotes.getBoundingClientRect();
        var elementLeft,elementTop; //x and y
        var scrollTop = document.documentElement.scrollTop?
            document.documentElement.scrollTop:document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft?
            document.documentElement.scrollLeft:document.body.scrollLeft;
        elementTop = rect.top+scrollTop+480;
        elementLeft = rect.left+scrollLeft+40;
        $scope.addNote = function() {
            $scope.newNote = {};
            $scope.position = {
                x: elementTop,
                y: elementLeft
            };
            $scope.color = '#ffd6bc';
            $scope.header = "Note 1";
            $scope.text = "Test note 1";
            $scope.newNote.createdOn = Date.now();
            $scope.newNote.text = ' ';
            $scope.newNote.edit = true;
            $scope.notes.push($scope.newNote);
            $scope.newNote = {};
            $scope.noteText = ''; //clear the input after adding
            // localStorage.setItem('notes', JSON.stringify($scope.notes));
        }
    }


}

