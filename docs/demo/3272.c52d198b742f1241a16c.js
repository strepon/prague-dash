"use strict";(self.webpackChunkprague_dash=self.webpackChunkprague_dash||[]).push([[3272],{3272:(O,c,e)=>{e.r(c),e.d(c,{createSwipeBackGesture:()=>E});var h=e(2377),_=e(9461);e(960);const E=(a,g,D,M,m)=>{const r=a.ownerDocument.defaultView;return(0,_.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&g(),onStart:D,onMove:t=>{M(t.deltaX/r.innerWidth)},onEnd:t=>{const s=r.innerWidth,n=t.deltaX/s,o=t.velocityX,u=o>=0&&(o>.2||t.deltaX>s/2),i=(u?1-n:n)*s;let l=0;if(i>5){const C=i/Math.abs(o);l=Math.min(C,540)}m(u,n<=0?.01:(0,h.j)(0,n,.9999),l)}})}}}]);