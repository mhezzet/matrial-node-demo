(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5450:function(e,t,n){e.exports=n(5620)},5455:function(e,t,n){},5620:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),l=(n(5455),n(31)),s=n(49),o=n(37),u=n(32),d=n(33),m=n(35),h=n(34),p=n(36),E=n(5),f=n(21),b=Object(f.c)(function(e){return{}});var v=Object(E.v)()(function(e){var t=e.muscles,n=e.onSelect,a=e.selectedMuscle,c=e.width,i=b(),l=t?t.findIndex(function(e){return e===a})+1:0;return r.a.createElement(E.a,{position:"static",className:i.root},r.a.createElement(E.r,{onChange:function(e,a){n(0===a?"":t[a-1])},value:l,indicatorColor:"secondary",textColor:"secondary",scrollable:"xs"===c,centered:"xs"!==c},r.a.createElement(E.q,{label:"All"}),t.map(function(e){return r.a.createElement(E.q,{key:e,label:e})})))}),g=n(50),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",muscles:""},n.handleChange=function(e){return function(t){var a=t.target.value;return n.setState(Object(l.a)({},e,a))}},n.handleSubmit=function(){n.props.onSubmiting(Object(s.a)({id:"".concat(n.state.title," - ").concat(Math.random())},n.state)),n.props.onFinishSubmiting&&n.props.onFinishSubmiting()},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.selectedExercise&&this.setState(Object(s.a)({},this.props.selectedExercise))}},{key:"render",value:function(){var e=this.props,t=e.muscles,n=e.type,a=this.state,c=a.title,i=a.description,l=a.muscles;return console.log(this.state),r.a.createElement("form",{style:{display:"contents"}},r.a.createElement(E.s,{label:"Title",value:c,onChange:this.handleChange("title"),margin:"normal",fullWidth:!0}),r.a.createElement(E.g,{fullWidth:!0,margin:"normal"},r.a.createElement(E.j,{htmlFor:"age-native-simple"},"muscles"),r.a.createElement(E.p,{value:l,displayEmpty:!0,onChange:this.handleChange("muscles")},t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(E.s,{label:"Description",value:i,onChange:this.handleChange("description"),margin:"normal",multiline:!0,rows:"4",fullWidth:!0}),r.a.createElement(E.b,{onClick:this.handleSubmit,color:"primary",variant:"contained",margin:"normal",fullWidth:!0,disabled:!l||!c},n))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClick=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.onCreate,c=t.muscles;return r.a.createElement(a.Fragment,null,r.a.createElement(E.b,{variant:"fab",color:"secondary","aria-label":"Add",onClick:this.handleClick,mini:!0},r.a.createElement(g.a,null)),r.a.createElement(E.c,{open:e,onClose:this.handleClose,fullWidth:!0},r.a.createElement("div",{style:{margin:20}},r.a.createElement(E.f,{id:"form-dialog-title"},"Create a New Exercise"),r.a.createElement(E.d,null,r.a.createElement(E.e,null,"Please fill the form below")),r.a.createElement(x,{muscles:c,onSubmiting:n,type:"create",onFinishSubmiting:this.handleClose}))))}}]),t}(a.Component),j=Object(f.c)({Toolbar:{flexGrow:1}});function C(e){var t=e.muscles,n=e.onCreate,a=j();return r.a.createElement(E.a,{position:"static"},r.a.createElement(E.t,null,r.a.createElement(E.u,{variant:"h6",color:"inherit",className:a.Toolbar},"New App"),r.a.createElement(y,{muscles:t,onCreate:n})))}var O=n(162),S=Object(f.c)(function(e){return{paper:{padding:10,margin:10,height:500,overflowY:"auto"},headline:{textTransform:"capitalize"},leftPaneSubheading:{marginTop:20}}});function k(e){var t=e.exercises,n=e.selectedMuscle,c=e.onSelect,i=e.onDelete,l=e.onEditMode,s=e.onEdit,o=e.editMode,u=e.muscles,d=(e.onCreate,e.selectedExercise),m=d.title,h=void 0===m?"Welcome":m,p=d.description,f=void 0===p?"Please select an exersice from the list on the left.":p,b=e.selectedExercise,v=S();return r.a.createElement(E.h,{container:!0},r.a.createElement(E.h,{item:!0,xs:12,sm:6},r.a.createElement(E.o,{className:v.paper},t.map(function(e){var t=Object(O.a)(e,2),s=t[0],o=t[1];return n&&n!==s?null:r.a.createElement(a.Fragment,{key:s},r.a.createElement(E.u,{variant:"h6",color:"secondary"},s),r.a.createElement(E.k,{component:"ul"},o.map(function(e){var t=e.title,n=e.id;return r.a.createElement(E.l,{variant:"body1",key:n,button:!0,onClick:function(){return c(n)}},r.a.createElement(E.n,{primary:t}),r.a.createElement(E.m,null,r.a.createElement(E.i,null,r.a.createElement(g.c,{onClick:function(){return l(n)}})),r.a.createElement(E.i,null,r.a.createElement(g.b,{onClick:function(){return i(n)}}))))})))}))),r.a.createElement(E.h,{item:!0,xs:12,sm:6},o?r.a.createElement(E.o,{className:v.paper},r.a.createElement(x,{key:Math.random(),selectedExercise:b,muscles:u,onSubmiting:s,type:"Edit"})):r.a.createElement(E.o,{className:v.paper},r.a.createElement(E.u,{variant:"h4",color:"secondary"},h),r.a.createElement(E.u,{variant:"body1",className:v.leftPaneSubheading},f))))}var M=["shoulders","chest","arms","back","legs"],w=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],B=n(15),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={exercises:w,SelectedMuscle:"",selectedExercise:{},editMode:!1},n.handleSelect=function(e){return n.setState({SelectedMuscle:e})},n.handleSelectedExercise=function(e){return n.setState(function(t){return{selectedExercise:t.exercises.find(function(t){return t.id===e}),editMode:!1}})},n.handleCreate=function(e){return n.setState(function(t){var n=t.exercises;return{exercises:Object(o.a)(n).concat([e])}})},n.handleDelete=function(e){return n.setState(function(t){var n=t.exercises,a=t.selectedExercise,r=t.editMode;return{exercises:n.filter(function(t){return t.id!==e}),selectedExercise:a.id===e?{}:a,editMode:a.id!==e&&r}})},n.handleEditMode=function(e){return n.setState(function(t){return{editMode:!0,selectedExercise:t.exercises.find(function(t){return t.id===e})}})},n.handleEdit=function(e){return n.setState(function(t){var n=t.exercises;return{exercises:Object(o.a)(n.filter(function(t){return t.id!==e.id})).concat([e]),selectedExercise:{},editMode:!1}})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"getExercisesByMuscles",value:function(){var e=M.reduce(function(e,t){return Object(s.a)({},e,Object(l.a)({},t,[]))},{});return Object.entries(this.state.exercises.reduce(function(e,t){var n=t.muscles;return e[n]=Object(o.a)(e[n]).concat([t]),e},e))}},{key:"render",value:function(){var e=this.getExercisesByMuscles(),t=this.state,n=t.SelectedMuscle,a=t.selectedExercise,c=t.editMode,i=this.props.classes;return r.a.createElement("div",{className:i.container},r.a.createElement(C,{muscles:M,onCreate:this.handleCreate}),r.a.createElement(k,{exercises:e,selectedMuscle:n,onSelect:this.handleSelectedExercise,selectedExercise:a,onDelete:this.handleDelete,onEditMode:this.handleEditMode,editMode:c,muscles:M,onCreate:this.handleCreate,onEdit:this.handleEdit}),r.a.createElement(v,{muscles:M,onSelect:this.handleSelect,selectedMuscle:n}))}}]),t}(a.Component),N=Object(B.withStyles)(function(e){return{"@global":{"html, body, #root":{height:"100vh"}},container:{height:"100vh"}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(48),T=n(160),W=n.n(T),A=n(161),F=n.n(A),q=n(96),I=n.n(q),J=Object(B.createMuiTheme)({palette:{primary:F.a,secondary:I.a}}),z=n(61),G=n.n(z),L=Object(P.create)({plugins:[W()()].concat(Object(o.a)(Object(f.b)().plugins))});i.a.render(r.a.createElement(function(e){var t=e.children;return console.log(J),r.a.createElement(B.MuiThemeProvider,{theme:J},r.a.createElement(G.a,null),r.a.createElement(f.a,{jss:L},t))},null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5450,2,1]]]);
//# sourceMappingURL=main.f554890c.chunk.js.map