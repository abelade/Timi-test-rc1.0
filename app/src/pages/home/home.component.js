angular
    .module('home', [
        'note'
    ])
    .component('homeComponent', {
        templateUrl: 'pages/home/home.component.html',
        controller: HomeController
    });

HomeController.$inject = ['$scope'];
function HomeController($scope) {
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

    $ctrl.addNote = function() {


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

            $ctrl.newNote = {};
            $ctrl.position = {
                x: elementTop,
                y: elementLeft
            };
            $ctrl.color = '#ffd6bc';
            $ctrl.header = "Note 1";
            $ctrl.text = "Test note 1";
            $ctrl.newNote.createdOn = Date.now();
            $ctrl.newNote.text = ' ';
            $ctrl.newNote.edit = true;
            $ctrl.notes.push($ctrl.newNote);
            $ctrl.newNote = {};
            $ctrl.noteText = ''; //clear the input after adding
            // localStorage.setItem('notes', JSON.stringify($scope.notes));

    }


}

