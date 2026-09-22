function hxUnpackRoster(){
  var P=window.HX_ROSTER;
  if(!P) throw new Error("HX roster pack missing");
  function rows(keys, packed){
    var d=P.d, out=[], i, j, obj, idx;
    for(i=0;i<packed.length;i++){
      obj={};
      for(j=0;j<keys.length;j++){
        idx=packed[i][j];
        if(idx!==-1) obj[keys[j]]=d[keys[j]][idx];
      }
      out.push(obj);
    }
    return out;
  }
  window.TEAM=rows(P.teamK,P.team);
  window.STAFF=rows(P.staffK,P.staff);
  window.FULL=rows(P.fullK,P.full);
  window.PEOPLE=rows(P.peopleK,P.people);
}
