(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5421:function(e,t,n){e.exports=n(5581)},5426:function(e,t,n){},5581:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),l=(n(5426),n(28)),s=n(43),o=n(53),u=n(29),d=n(30),m=n(32),h=n(31),p=n(33),f=n(5);var E=Object(f.v)()(function(e){var t=e.muscles,n=e.onSelect,a=e.selectedMuscle,c=e.width,i=t?t.findIndex(function(e){return e===a})+1:0;return r.a.createElement(f.a,{position:"static"},r.a.createElement(f.r,{onChange:function(e,a){n(0===a?"":t[a-1])},value:i,indicatorColor:"secondary",textColor:"secondary",scrollable:"xs"===c,centered:"xs"!==c},r.a.createElement(f.q,{label:"All"}),t.map(function(e){return r.a.createElement(f.q,{key:e,label:e})})))}),b=n(44),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",muscles:""},n.handleChange=function(e){return function(t){var a=t.target.value;return n.setState(Object(l.a)({},e,a))}},n.handleSubmit=function(){n.props.onSubmiting(Object(s.a)({id:"".concat(n.state.title," - ").concat(Math.random())},n.state)),n.props.onFinishSubmiting&&n.props.onFinishSubmiting()},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.selectedExercise&&this.setState(Object(s.a)({},this.props.selectedExercise))}},{key:"render",value:function(){var e=this.props,t=e.muscles,n=e.type,a=this.state,c=a.title,i=a.description,l=a.muscles;return console.log(this.state),r.a.createElement("form",{style:{display:"contents"}},r.a.createElement(f.s,{label:"Title",value:c,onChange:this.handleChange("title"),margin:"normal",fullWidth:!0}),r.a.createElement(f.g,{fullWidth:!0,margin:"normal"},r.a.createElement(f.j,{htmlFor:"age-native-simple"},"muscles"),r.a.createElement(f.p,{value:l,displayEmpty:!0,onChange:this.handleChange("muscles")},t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(f.s,{label:"Description",value:i,onChange:this.handleChange("description"),margin:"normal",multiline:!0,rows:"4",fullWidth:!0}),r.a.createElement(f.b,{onClick:this.handleSubmit,color:"primary",variant:"contained",margin:"normal",fullWidth:!0,disabled:!l||!c},n))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClick=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.onCreate,c=t.muscles;return r.a.createElement(a.Fragment,null,r.a.createElement(f.b,{variant:"fab",color:"secondary","aria-label":"Add",onClick:this.handleClick,mini:!0},r.a.createElement(b.a,null)),r.a.createElement(f.c,{open:e,onClose:this.handleClose,fullWidth:!0},r.a.createElement("div",{style:{margin:20}},r.a.createElement(f.f,{id:"form-dialog-title"},"Create a New Exercise"),r.a.createElement(f.d,null,r.a.createElement(f.e,null,"Please fill the form below")),r.a.createElement(v,{muscles:c,onSubmiting:n,type:"create",onFinishSubmiting:this.handleClose}))))}}]),t}(a.Component);function x(e){var t=e.muscles,n=e.onCreate;return r.a.createElement(f.a,{position:"static"},r.a.createElement(f.t,null,r.a.createElement(f.u,{variant:"h6",color:"inherit",style:{flexGrow:1}},"New App"),r.a.createElement(g,{muscles:t,onCreate:n})))}var y=n(138),C=n(18);var S=Object(C.withStyles)({paper:{padding:10,margin:10,height:500,overflowY:"auto"},headline:{textTransform:"capitalize"},leftPaneSubheading:{marginTop:20}})(function(e){var t=e.exercises,n=e.selectedMuscle,c=e.onSelect,i=e.onDelete,l=e.onEditMode,s=e.onEdit,o=e.editMode,u=e.muscles,d=e.classes,m=e.selectedExercise,h=m.title,p=void 0===h?"Welcome":h,E=m.description,g=void 0===E?"Please select an exersice from the list on the left.":E,x=e.selectedExercise;return r.a.createElement(f.h,{container:!0},r.a.createElement(f.h,{item:!0,xs:12,sm:6},r.a.createElement(f.o,{className:d.paper},t.map(function(e){var t=Object(y.a)(e,2),s=t[0],o=t[1];return n&&n!==s?null:r.a.createElement(a.Fragment,{key:s},r.a.createElement(f.u,{variant:"h6",color:"secondary"},s),r.a.createElement(f.k,{component:"ul"},o.map(function(e){var t=e.title,n=e.id;return r.a.createElement(f.l,{variant:"body1",key:n,button:!0,onClick:function(){return c(n)}},r.a.createElement(f.n,{primary:t}),r.a.createElement(f.m,null,r.a.createElement(f.i,null,r.a.createElement(b.c,{onClick:function(){return l(n)}})),r.a.createElement(f.i,null,r.a.createElement(b.b,{onClick:function(){return i(n)}}))))})))}))),r.a.createElement(f.h,{item:!0,xs:12,sm:6},o?r.a.createElement(f.o,{className:d.paper},r.a.createElement(v,{key:Math.random(),selectedExercise:x,muscles:u,onSubmiting:s,type:"Edit"})):r.a.createElement(f.o,{className:d.paper},r.a.createElement(f.u,{variant:"h4",color:"secondary"},p),r.a.createElement(f.u,{variant:"body1",className:d.leftPaneSubheading},g))))}),j=["shoulders","chest","arms","back","legs"],O=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={exercises:O,SelectedMuscle:"",selectedExercise:{},editMode:!1},n.handleSelect=function(e){return n.setState({SelectedMuscle:e})},n.handleSelectedExercise=function(e){return n.setState(function(t){return{selectedExercise:t.exercises.find(function(t){return t.id===e}),editMode:!1}})},n.handleCreate=function(e){return n.setState(function(t){var n=t.exercises;return{exercises:Object(o.a)(n).concat([e])}})},n.handleDelete=function(e){return n.setState(function(t){var n=t.exercises,a=t.selectedExercise,r=t.editMode;return{exercises:n.filter(function(t){return t.id!==e}),selectedExercise:a.id===e?{}:a,editMode:a.id!==e&&r}})},n.handleEditMode=function(e){return n.setState(function(t){return{editMode:!0,selectedExercise:t.exercises.find(function(t){return t.id===e})}})},n.handleEdit=function(e){return n.setState(function(t){var n=t.exercises;return{exercises:Object(o.a)(n.filter(function(t){return t.id!==e.id})).concat([e]),selectedExercise:{},editMode:!1}})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getExercisesByMuscles",value:function(){var e=j.reduce(function(e,t){return Object(s.a)({},e,Object(l.a)({},t,[]))},{});return Object.entries(this.state.exercises.reduce(function(e,t){var n=t.muscles;return e[n]=Object(o.a)(e[n]).concat([t]),e},e))}},{key:"render",value:function(){var e=this.getExercisesByMuscles(),t=this.state,n=t.SelectedMuscle,a=t.selectedExercise,c=t.editMode,i=this.props.classes;return r.a.createElement("div",{className:i.container},r.a.createElement(x,{muscles:j,onCreate:this.handleCreate}),r.a.createElement(S,{exercises:e,selectedMuscle:n,onSelect:this.handleSelectedExercise,selectedExercise:a,onDelete:this.handleDelete,onEditMode:this.handleEditMode,editMode:c,muscles:j,onCreate:this.handleCreate,onEdit:this.handleEdit}),r.a.createElement(E,{muscles:j,onSelect:this.handleSelect,selectedMuscle:n}))}}]),t}(a.Component),M=Object(C.withStyles)(function(e){return{"@global":{"html, body, #root":{height:"100vh"}},container:{height:"100vh"}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5421,2,1]]]);
//# sourceMappingURL=main.3322cfba.chunk.js.map