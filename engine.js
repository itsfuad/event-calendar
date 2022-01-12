/* Group reminders by ISO dates in a local personal calendar */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.Project=factory();}(this,function(){
  'use strict';
  function analyze(text){

var groups={};String(text).split(/\r?\n/).forEach(function(line){var m=/^(\d{4}-\d{2}-\d{2})\s*:\s*(.+)$/.exec(line);
  if(!m)return;var date=new Date(m[1]+'T00:00:00Z');if(isNaN(date.getTime())||date.toISOString().slice(0,10)!==m[1])return;
  if(!groups[m[1]])groups[m[1]]=[];groups[m[1]].push(m[2]);
});return {events:groups,days:Object.keys(groups).length};
  }
  return {analyze:analyze};
}));
