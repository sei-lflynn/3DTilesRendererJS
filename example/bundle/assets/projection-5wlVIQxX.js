import{l as d,aH as Ye,V as Je,a as nn,O as on,aI as rn,ax as qe,aJ as _e,aK as re,aL as sn,B as me,d as Ke,b as an,U as Xe,aM as Pe,h as cn,r as ie,aN as ln,k as B,M as St,C as Cn,Q as bt,at as un,ae as dn,c as Ve,aO as zn,af as Ln,an as On}from"./three.module-D9WYbBBL.js";import{r as o,d as pe,c as fn,u as et,j as G,a as xt,g as An,h as Un,C as Rn,T as Dn,E as Bn}from"./CameraControls-CKhnPWYh.js";import{T as Tn}from"./TilesFadePlugin-D0a9WdAJ.js";import{I as Wn,C as In}from"./ImageOverlayPlugin-C-3BVT8W.js";import{_ as Ze}from"./extends-CF3RwP-h.js";import{v as pn}from"./constants-DmrXiGWL.js";import"./GlobeControls-B_La97IP.js";import"./EnvironmentControls-CZh_wvzj.js";import"./Ellipsoid-DWeM2IpF.js";import"./I3DMLoader-BeHz4bWV.js";import"./BatchTable-CRr3zuRk.js";import"./GLTFLoader-CFPJuhhp.js";import"./TilesRenderer-DR8BxnJM.js";import"./B3DMLoader-Wj90IS9S.js";import"./PNTSLoader-Cu1RReYt.js";import"./CMPTLoader-1bsMlMtP.js";import"./EllipsoidRegion-BI1ZgYDb.js";import"./GeometryClipper-DuLhYLHP.js";import"./TMSImageSource-9dkhe48L.js";import"./TiledImageSource-BXVfohBe.js";class jn{constructor(){this.name="ENFORCE_NONZERO_ERROR",this.priority=-1/0,this.originalError=new Map}preprocessNode(e){if(e.geometricError===0){let t=e.parent,r=1,n=-1,i=1/0;for(;t!==null;)t.geometricError!==0&&t.geometricError<i&&(i=t.geometricError,n=r),t=t.parent,r++;n!==-1&&(e.geometricError=i*2**-r)}}}const Ae=new d,Et=new d,Fn=new d,zt=new Je;function Hn(s,e,t){const r=Ae.setFromMatrixPosition(s.matrixWorld);r.project(e);const n=t.width/2,i=t.height/2;return[r.x*n+n,-(r.y*i)+i]}function kn(s,e){const t=Ae.setFromMatrixPosition(s.matrixWorld),r=Et.setFromMatrixPosition(e.matrixWorld),n=t.sub(r),i=e.getWorldDirection(Fn);return n.angleTo(i)>Math.PI/2}function Nn(s,e,t,r){const n=Ae.setFromMatrixPosition(s.matrixWorld),i=n.clone();i.project(e),zt.set(i.x,i.y),t.setFromCamera(zt,e);const c=t.intersectObjects(r,!0);if(c.length){const a=c[0].distance;return n.distanceTo(t.ray.origin)<a}return!0}function $n(s,e){if(e instanceof on)return e.zoom;if(e instanceof nn){const t=Ae.setFromMatrixPosition(s.matrixWorld),r=Et.setFromMatrixPosition(e.matrixWorld),n=e.fov*Math.PI/180,i=t.distanceTo(r);return 1/(2*Math.tan(n/2)*i)}else return 1}function Gn(s,e,t){if(e instanceof nn||e instanceof on){const r=Ae.setFromMatrixPosition(s.matrixWorld),n=Et.setFromMatrixPosition(e.matrixWorld),i=r.distanceTo(n),c=(t[1]-t[0])/(e.far-e.near),a=t[1]-c*e.far;return Math.round(c*i+a)}}const wt=s=>Math.abs(s)<1e-10?0:s;function mn(s,e,t=""){let r="matrix3d(";for(let n=0;n!==16;n++)r+=wt(e[n]*s.elements[n])+(n!==15?",":")");return t+r}const Vn=(s=>e=>mn(e,s))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),qn=(s=>(e,t)=>mn(e,s(t),"translate(-50%,-50%)"))(s=>[1/s,1/s,1/s,1,-1/s,-1/s,-1/s,-1,1/s,1/s,1/s,1,1,1,1,1]);function Xn(s){return s&&typeof s=="object"&&"current"in s}const tt=o.forwardRef(({children:s,eps:e=.001,style:t,className:r,prepend:n,center:i,fullscreen:c,portal:a,distanceFactor:f,sprite:h=!1,transform:p=!1,occlude:l,onOcclude:b,castShadow:F,receiveShadow:L,material:O,geometry:U,zIndexRange:R=[16777271,0],calculatePosition:S=Hn,as:m="div",wrapperClass:g,pointerEvents:T="auto",...E},W)=>{const{gl:H,camera:z,scene:J,size:A,raycaster:oe,events:K,viewport:ee}=pe(),[_]=o.useState(()=>document.createElement(m)),I=o.useRef(null),y=o.useRef(null),v=o.useRef(0),u=o.useRef([0,0]),w=o.useRef(null),C=o.useRef(null),P=(a==null?void 0:a.current)||K.connected||H.domElement.parentNode,M=o.useRef(null),k=o.useRef(!1),N=o.useMemo(()=>l&&l!=="blending"||Array.isArray(l)&&l.length&&Xn(l[0]),[l]);o.useLayoutEffect(()=>{const j=H.domElement;l&&l==="blending"?(j.style.zIndex=`${Math.floor(R[0]/2)}`,j.style.position="absolute",j.style.pointerEvents="none"):(j.style.zIndex=null,j.style.position=null,j.style.pointerEvents=null)},[l]),o.useLayoutEffect(()=>{if(y.current){const j=I.current=fn.createRoot(_);if(J.updateMatrixWorld(),p)_.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const D=S(y.current,z,A);_.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${D[0]}px,${D[1]}px,0);transform-origin:0 0;`}return P&&(n?P.prepend(_):P.appendChild(_)),()=>{P&&P.removeChild(_),j.unmount()}}},[P,p]),o.useLayoutEffect(()=>{g&&(_.className=g)},[g]);const x=o.useMemo(()=>p?{position:"absolute",top:0,left:0,width:A.width,height:A.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:i?"translate3d(-50%,-50%,0)":"none",...c&&{top:-A.height/2,left:-A.width/2,width:A.width,height:A.height},...t},[t,i,c,A,p]),te=o.useMemo(()=>({position:"absolute",pointerEvents:T}),[T]);o.useLayoutEffect(()=>{if(k.current=!1,p){var j;(j=I.current)==null||j.render(o.createElement("div",{ref:w,style:x},o.createElement("div",{ref:C,style:te},o.createElement("div",{ref:W,className:r,style:t,children:s}))))}else{var D;(D=I.current)==null||D.render(o.createElement("div",{ref:W,style:x,className:r,children:s}))}});const $=o.useRef(!0);et(j=>{if(y.current){z.updateMatrixWorld(),y.current.updateWorldMatrix(!0,!1);const D=p?u.current:S(y.current,z,A);if(p||Math.abs(v.current-z.zoom)>e||Math.abs(u.current[0]-D[0])>e||Math.abs(u.current[1]-D[1])>e){const he=kn(y.current,z);let fe=!1;N&&(Array.isArray(l)?fe=l.map(ge=>ge.current):l!=="blending"&&(fe=[J]));const Ce=$.current;if(fe){const ge=Nn(y.current,z,oe,fe);$.current=ge&&!he}else $.current=!he;Ce!==$.current&&(b?b(!$.current):_.style.display=$.current?"block":"none");const Re=Math.floor(R[0]/2),wn=l?N?[R[0],Re]:[Re-1,0]:R;if(_.style.zIndex=`${Gn(y.current,z,wn)}`,p){const[ge,_t]=[A.width/2,A.height/2],nt=z.projectionMatrix.elements[5]*_t,{isOrthographicCamera:Ct,top:Sn,left:bn,bottom:En,right:Mn}=z,Pn=Vn(z.matrixWorldInverse),_n=Ct?`scale(${nt})translate(${wt(-(Mn+bn)/2)}px,${wt((Sn+En)/2)}px)`:`translateZ(${nt}px)`;let ye=y.current.matrixWorld;h&&(ye=z.matrixWorldInverse.clone().transpose().copyPosition(ye).scale(y.current.scale),ye.elements[3]=ye.elements[7]=ye.elements[11]=0,ye.elements[15]=1),_.style.width=A.width+"px",_.style.height=A.height+"px",_.style.perspective=Ct?"":`${nt}px`,w.current&&C.current&&(w.current.style.transform=`${_n}${Pn}translate(${ge}px,${_t}px)`,C.current.style.transform=qn(ye,1/((f||10)/400)))}else{const ge=f===void 0?1:$n(y.current,z)*f;_.style.transform=`translate3d(${D[0]}px,${D[1]}px,0) scale(${ge})`}u.current=D,v.current=z.zoom}}if(!N&&M.current&&!k.current)if(p){if(w.current){const D=w.current.children[0];if(D!=null&&D.clientWidth&&D!=null&&D.clientHeight){const{isOrthographicCamera:he}=z;if(he||U)E.scale&&(Array.isArray(E.scale)?E.scale instanceof d?M.current.scale.copy(E.scale.clone().divideScalar(1)):M.current.scale.set(1/E.scale[0],1/E.scale[1],1/E.scale[2]):M.current.scale.setScalar(1/E.scale));else{const fe=(f||10)/400,Ce=D.clientWidth*fe,Re=D.clientHeight*fe;M.current.scale.set(Ce,Re,1)}k.current=!0}}}else{const D=_.children[0];if(D!=null&&D.clientWidth&&D!=null&&D.clientHeight){const he=1/ee.factor,fe=D.clientWidth*he,Ce=D.clientHeight*he;M.current.scale.set(fe,Ce,1),k.current=!0}M.current.lookAt(j.camera.position)}});const ne=o.useMemo(()=>({vertexShader:p?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[p]);return o.createElement("group",Ze({},E,{ref:y}),l&&!N&&o.createElement("mesh",{castShadow:F,receiveShadow:L,ref:M},U||o.createElement("planeGeometry",null),O||o.createElement("shaderMaterial",{side:Ye,vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader})))}),hn=pn>=125?"uv1":"uv2",Lt=new me,De=new d;let Mt=class extends rn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new _e(t,6,1);return this.setAttribute("instanceStart",new re(r,3,0)),this.setAttribute("instanceEnd",new re(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));const n=new _e(r,t*2,1);return this.setAttribute("instanceColorStart",new re(n,t,0)),this.setAttribute("instanceColorEnd",new re(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new sn(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new me);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Lt.setFromBufferAttribute(t),this.boundingBox.union(Lt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,c=e.count;i<c;i++)De.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(De)),De.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(De));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};class gn extends Mt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){const r=e.length-t,n=new Float32Array(2*r);if(t===3)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}let Pt=class extends an{constructor(e){super({type:"LineMaterial",uniforms:Xe.clone(Xe.merge([Pe.common,Pe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${pn>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}};const ot=new ie,Ot=new d,At=new d,V=new ie,q=new ie,se=new ie,rt=new d,it=new B,Q=new ln,Ut=new d,Be=new me,Te=new Ke,ae=new ie;let ue,ve;function Rt(s,e,t){return ae.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),ae.multiplyScalar(1/ae.w),ae.x=ve/t.width,ae.y=ve/t.height,ae.applyMatrix4(s.projectionMatrixInverse),ae.multiplyScalar(1/ae.w),Math.abs(Math.max(ae.x,ae.y))}function Zn(s,e){const t=s.matrixWorld,r=s.geometry,n=r.attributes.instanceStart,i=r.attributes.instanceEnd,c=Math.min(r.instanceCount,n.count);for(let a=0,f=c;a<f;a++){Q.start.fromBufferAttribute(n,a),Q.end.fromBufferAttribute(i,a),Q.applyMatrix4(t);const h=new d,p=new d;ue.distanceSqToSegment(Q.start,Q.end,p,h),p.distanceTo(h)<ve*.5&&e.push({point:p,pointOnLine:h,distance:ue.origin.distanceTo(p),object:s,face:null,faceIndex:a,uv:null,[hn]:null})}}function Qn(s,e,t){const r=e.projectionMatrix,i=s.material.resolution,c=s.matrixWorld,a=s.geometry,f=a.attributes.instanceStart,h=a.attributes.instanceEnd,p=Math.min(a.instanceCount,f.count),l=-e.near;ue.at(1,se),se.w=1,se.applyMatrix4(e.matrixWorldInverse),se.applyMatrix4(r),se.multiplyScalar(1/se.w),se.x*=i.x/2,se.y*=i.y/2,se.z=0,rt.copy(se),it.multiplyMatrices(e.matrixWorldInverse,c);for(let b=0,F=p;b<F;b++){if(V.fromBufferAttribute(f,b),q.fromBufferAttribute(h,b),V.w=1,q.w=1,V.applyMatrix4(it),q.applyMatrix4(it),V.z>l&&q.z>l)continue;if(V.z>l){const m=V.z-q.z,g=(V.z-l)/m;V.lerp(q,g)}else if(q.z>l){const m=q.z-V.z,g=(q.z-l)/m;q.lerp(V,g)}V.applyMatrix4(r),q.applyMatrix4(r),V.multiplyScalar(1/V.w),q.multiplyScalar(1/q.w),V.x*=i.x/2,V.y*=i.y/2,q.x*=i.x/2,q.y*=i.y/2,Q.start.copy(V),Q.start.z=0,Q.end.copy(q),Q.end.z=0;const O=Q.closestPointToPointParameter(rt,!0);Q.at(O,Ut);const U=St.lerp(V.z,q.z,O),R=U>=-1&&U<=1,S=rt.distanceTo(Ut)<ve*.5;if(R&&S){Q.start.fromBufferAttribute(f,b),Q.end.fromBufferAttribute(h,b),Q.start.applyMatrix4(c),Q.end.applyMatrix4(c);const m=new d,g=new d;ue.distanceSqToSegment(Q.start,Q.end,g,m),t.push({point:g,pointOnLine:m,distance:ue.origin.distanceTo(g),object:s,face:null,faceIndex:b,uv:null,[hn]:null})}}}let yn=class extends cn{constructor(e=new Mt,t=new Pt({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,a=0,f=t.count;c<f;c++,a+=2)Ot.fromBufferAttribute(t,c),At.fromBufferAttribute(r,c),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Ot.distanceTo(At);const i=new _e(n,2,1);return e.setAttribute("instanceDistanceStart",new re(i,1,0)),e.setAttribute("instanceDistanceEnd",new re(i,1,1)),this}raycast(e,t){const r=this.material.worldUnits,n=e.camera;n===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ue=e.ray;const c=this.matrixWorld,a=this.geometry,f=this.material;ve=f.linewidth+i,a.boundingSphere===null&&a.computeBoundingSphere(),Te.copy(a.boundingSphere).applyMatrix4(c);let h;if(r)h=ve*.5;else{const l=Math.max(n.near,Te.distanceToPoint(ue.origin));h=Rt(n,l,f.resolution)}if(Te.radius+=h,ue.intersectsSphere(Te)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Be.copy(a.boundingBox).applyMatrix4(c);let p;if(r)p=ve*.5;else{const l=Math.max(n.near,Be.distanceToPoint(ue.origin));p=Rt(n,l,f.resolution)}Be.expandByScalar(p),ue.intersectsBox(Be)!==!1&&(r?Zn(this,t):Qn(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ot),this.material.uniforms.resolution.value.set(ot.z,ot.w))}};class Yn extends yn{constructor(e=new gn,t=new Pt({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Jn=new d,Kn=new d,eo=new d,to=(s,e,t)=>{const r=t.width/2,n=t.height/2;e.updateMatrixWorld(!1);const i=s.project(e);return i.x=i.x*r+r,i.y=-(i.y*n)+n,i},no=(s,e,t,r=1)=>{const n=Jn.set(s.x/t.width*2-1,-(s.y/t.height)*2+1,r);return n.unproject(e),n},vn=(s,e,t,r)=>{const n=to(eo.copy(s),t,r);let i=0;for(let c=0;c<2;++c){const a=Kn.copy(n).setComponent(c,n.getComponent(c)+e),f=no(a,t,r,a.z);i=Math.max(i,s.distanceTo(f))}return i},Qe=o.forwardRef(function({points:e,color:t=16777215,vertexColors:r,linewidth:n,lineWidth:i,segments:c,dashed:a,...f},h){var p,l;const b=pe(R=>R.size),F=o.useMemo(()=>c?new yn:new Yn,[c]),[L]=o.useState(()=>new Pt),O=(r==null||(p=r[0])==null?void 0:p.length)===4?4:3,U=o.useMemo(()=>{const R=c?new Mt:new gn,S=e.map(m=>{const g=Array.isArray(m);return m instanceof d||m instanceof ie?[m.x,m.y,m.z]:m instanceof Je?[m.x,m.y,0]:g&&m.length===3?[m[0],m[1],m[2]]:g&&m.length===2?[m[0],m[1],0]:m});if(R.setPositions(S.flat()),r){t=16777215;const m=r.map(g=>g instanceof Cn?g.toArray():g);R.setColors(m.flat(),O)}return R},[e,c,r,O]);return o.useLayoutEffect(()=>{F.computeLineDistances()},[e,F]),o.useLayoutEffect(()=>{a?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[a,L]),o.useEffect(()=>()=>{U.dispose(),L.dispose()},[U]),o.createElement("primitive",Ze({object:F,ref:h},f),o.createElement("primitive",{object:U,attach:"geometry"}),o.createElement("primitive",Ze({object:L,attach:"material",color:t,vertexColors:!!r,resolution:[b.width,b.height],linewidth:(l=n??i)!==null&&l!==void 0?l:1,dashed:a,transparent:O===4},f)))}),Ue=o.createContext(null),We=new d,Dt=new d,oo=(s,e,t,r)=>{const n=e.dot(e),i=e.dot(s)-e.dot(t),c=e.dot(r);return c===0?-i/n:(We.copy(r).multiplyScalar(n/c).sub(e),Dt.copy(r).multiplyScalar(i/c).add(t).sub(s),-We.dot(Dt)/We.dot(We))},ro=new d(0,1,0),Bt=new B,st=({direction:s,axis:e})=>{const{translation:t,translationLimits:r,annotations:n,annotationsClass:i,depthTest:c,scale:a,lineWidth:f,fixed:h,axisColors:p,hoveredColor:l,opacity:b,renderOrder:F,onDragStart:L,onDrag:O,onDragEnd:U,userData:R}=o.useContext(Ue),S=pe(v=>v.controls),m=o.useRef(null),g=o.useRef(null),T=o.useRef(null),E=o.useRef(0),[W,H]=o.useState(!1),z=o.useCallback(v=>{n&&(m.current.innerText=`${t.current[e].toFixed(2)}`,m.current.style.display="block"),v.stopPropagation();const u=new B().extractRotation(g.current.matrixWorld),w=v.point.clone(),C=new d().setFromMatrixPosition(g.current.matrixWorld),P=s.clone().applyMatrix4(u).normalize();T.current={clickPoint:w,dir:P},E.current=t.current[e],L({component:"Arrow",axis:e,origin:C,directions:[P]}),S&&(S.enabled=!1),v.target.setPointerCapture(v.pointerId)},[n,s,S,L,t,e]),J=o.useCallback(v=>{if(v.stopPropagation(),W||H(!0),T.current){const{clickPoint:u,dir:w}=T.current,[C,P]=(r==null?void 0:r[e])||[void 0,void 0];let M=oo(u,w,v.ray.origin,v.ray.direction);C!==void 0&&(M=Math.max(M,C-E.current)),P!==void 0&&(M=Math.min(M,P-E.current)),t.current[e]=E.current+M,n&&(m.current.innerText=`${t.current[e].toFixed(2)}`),Bt.makeTranslation(w.x*M,w.y*M,w.z*M),O(Bt)}},[n,O,W,t,r,e]),A=o.useCallback(v=>{n&&(m.current.style.display="none"),v.stopPropagation(),T.current=null,U(),S&&(S.enabled=!0),v.target.releasePointerCapture(v.pointerId)},[n,S,U]),oe=o.useCallback(v=>{v.stopPropagation(),H(!1)},[]),{cylinderLength:K,coneWidth:ee,coneLength:_,matrixL:I}=o.useMemo(()=>{const v=h?f/a*1.6:a/20,u=h?.2:a/5,w=h?1-u:a-u,C=new bt().setFromUnitVectors(ro,s.clone().normalize()),P=new B().makeRotationFromQuaternion(C);return{cylinderLength:w,coneWidth:v,coneLength:u,matrixL:P}},[s,a,f,h]),y=W?l:p[e];return o.createElement("group",{ref:g},o.createElement("group",{matrix:I,matrixAutoUpdate:!1,onPointerDown:z,onPointerMove:J,onPointerUp:A,onPointerOut:oe},n&&o.createElement(tt,{position:[0,-_,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:m})),o.createElement("mesh",{visible:!1,position:[0,(K+_)/2,0],userData:R},o.createElement("cylinderGeometry",{args:[ee*1.4,ee*1.4,K+_,8,1]})),o.createElement(Qe,{transparent:!0,raycast:()=>null,depthTest:c,points:[0,0,0,0,K,0],lineWidth:f,side:Ye,color:y,opacity:b,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),o.createElement("mesh",{raycast:()=>null,position:[0,K+_/2,0],renderOrder:F},o.createElement("coneGeometry",{args:[ee,_,24,1]}),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:c,color:y,opacity:b,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},at=new d,ct=new d,lt=s=>s*180/Math.PI,io=s=>s*Math.PI/180,so=(s,e,t,r,n)=>{at.copy(s).sub(t),ct.copy(e).sub(t);const i=r.dot(r),c=n.dot(n),a=at.dot(r)/i,f=at.dot(n)/c,h=ct.dot(r)/i,p=ct.dot(n)/c,l=Math.atan2(f,a);return Math.atan2(p,h)-l},ao=(s,e)=>{let t=Math.floor(s/e);return t=t<0?t+1:t,s-t*e},Tt=s=>{let e=ao(s,2*Math.PI);return Math.abs(e)<1e-6?0:(e<0&&(e+=2*Math.PI),e)},Ie=new B,Wt=new d,je=new dn,ut=new d,dt=({dir1:s,dir2:e,axis:t})=>{const{rotationLimits:r,annotations:n,annotationsClass:i,depthTest:c,scale:a,lineWidth:f,fixed:h,axisColors:p,hoveredColor:l,renderOrder:b,opacity:F,onDragStart:L,onDrag:O,onDragEnd:U,userData:R}=o.useContext(Ue),S=pe(y=>y.controls),m=o.useRef(null),g=o.useRef(null),T=o.useRef(0),E=o.useRef(0),W=o.useRef(null),[H,z]=o.useState(!1),J=o.useCallback(y=>{n&&(m.current.innerText=`${lt(E.current).toFixed(0)}º`,m.current.style.display="block"),y.stopPropagation();const v=y.point.clone(),u=new d().setFromMatrixPosition(g.current.matrixWorld),w=new d().setFromMatrixColumn(g.current.matrixWorld,0).normalize(),C=new d().setFromMatrixColumn(g.current.matrixWorld,1).normalize(),P=new d().setFromMatrixColumn(g.current.matrixWorld,2).normalize(),M=new un().setFromNormalAndCoplanarPoint(P,u);W.current={clickPoint:v,origin:u,e1:w,e2:C,normal:P,plane:M},L({component:"Rotator",axis:t,origin:u,directions:[w,C,P]}),S&&(S.enabled=!1),y.target.setPointerCapture(y.pointerId)},[n,S,L,t]),A=o.useCallback(y=>{if(y.stopPropagation(),H||z(!0),W.current){const{clickPoint:v,origin:u,e1:w,e2:C,normal:P,plane:M}=W.current,[k,N]=(r==null?void 0:r[t])||[void 0,void 0];je.copy(y.ray),je.intersectPlane(M,ut),je.direction.negate(),je.intersectPlane(M,ut);let x=so(v,ut,u,w,C),te=lt(x);y.shiftKey&&(te=Math.round(te/10)*10,x=io(te)),k!==void 0&&N!==void 0&&N-k<2*Math.PI?(x=Tt(x),x=x>Math.PI?x-2*Math.PI:x,x=St.clamp(x,k-T.current,N-T.current),E.current=T.current+x):(E.current=Tt(T.current+x),E.current=E.current>Math.PI?E.current-2*Math.PI:E.current),n&&(te=lt(E.current),m.current.innerText=`${te.toFixed(0)}º`),Ie.makeRotationAxis(P,x),Wt.copy(u).applyMatrix4(Ie).sub(u).negate(),Ie.setPosition(Wt),O(Ie)}},[n,O,H,r,t]),oe=o.useCallback(y=>{n&&(m.current.style.display="none"),y.stopPropagation(),T.current=E.current,W.current=null,U(),S&&(S.enabled=!0),y.target.releasePointerCapture(y.pointerId)},[n,S,U]),K=o.useCallback(y=>{y.stopPropagation(),z(!1)},[]),ee=o.useMemo(()=>{const y=s.clone().normalize(),v=e.clone().normalize();return new B().makeBasis(y,v,y.clone().cross(v))},[s,e]),_=h?.65:a*.65,I=o.useMemo(()=>{const v=[];for(let u=0;u<=32;u++){const w=u*(Math.PI/2)/32;v.push(new d(Math.cos(w)*_,Math.sin(w)*_,0))}return v},[_]);return o.createElement("group",{ref:g,onPointerDown:J,onPointerMove:A,onPointerUp:oe,onPointerOut:K,matrix:ee,matrixAutoUpdate:!1},n&&o.createElement(tt,{position:[_,_,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:m})),o.createElement(Qe,{points:I,lineWidth:f*4,visible:!1,userData:R}),o.createElement(Qe,{transparent:!0,raycast:()=>null,depthTest:c,points:I,lineWidth:f,side:Ye,color:H?l:p[t],opacity:F,polygonOffset:!0,polygonOffsetFactor:-10,renderOrder:b,fog:!1}))},co=(s,e,t)=>{const r=Math.abs(s.x)>=Math.abs(s.y)&&Math.abs(s.x)>=Math.abs(s.z)?0:Math.abs(s.y)>=Math.abs(s.x)&&Math.abs(s.y)>=Math.abs(s.z)?1:2,n=[0,1,2].sort((L,O)=>Math.abs(e.getComponent(O))-Math.abs(e.getComponent(L))),i=r===n[0]?n[1]:n[0],c=s.getComponent(r),a=s.getComponent(i),f=e.getComponent(r),h=e.getComponent(i),p=t.getComponent(r),b=(t.getComponent(i)-p*(a/c))/(h-f*(a/c));return[(p-b*f)/c,b]},Fe=new dn,He=new d,It=new B,ft=({dir1:s,dir2:e,axis:t})=>{const{translation:r,translationLimits:n,annotations:i,annotationsClass:c,depthTest:a,scale:f,lineWidth:h,fixed:p,axisColors:l,hoveredColor:b,opacity:F,onDragStart:L,onDrag:O,onDragEnd:U,userData:R}=o.useContext(Ue),S=pe(u=>u.controls),m=o.useRef(null),g=o.useRef(null),T=o.useRef(null),E=o.useRef(0),W=o.useRef(0),[H,z]=o.useState(!1),J=o.useCallback(u=>{i&&(m.current.innerText=`${r.current[(t+1)%3].toFixed(2)}, ${r.current[(t+2)%3].toFixed(2)}`,m.current.style.display="block"),u.stopPropagation();const w=u.point.clone(),C=new d().setFromMatrixPosition(g.current.matrixWorld),P=new d().setFromMatrixColumn(g.current.matrixWorld,0).normalize(),M=new d().setFromMatrixColumn(g.current.matrixWorld,1).normalize(),k=new d().setFromMatrixColumn(g.current.matrixWorld,2).normalize(),N=new un().setFromNormalAndCoplanarPoint(k,C);T.current={clickPoint:w,e1:P,e2:M,plane:N},E.current=r.current[(t+1)%3],W.current=r.current[(t+2)%3],L({component:"Slider",axis:t,origin:C,directions:[P,M,k]}),S&&(S.enabled=!1),u.target.setPointerCapture(u.pointerId)},[i,S,L,t]),A=o.useCallback(u=>{if(u.stopPropagation(),H||z(!0),T.current){const{clickPoint:w,e1:C,e2:P,plane:M}=T.current,[k,N]=(n==null?void 0:n[(t+1)%3])||[void 0,void 0],[x,te]=(n==null?void 0:n[(t+2)%3])||[void 0,void 0];Fe.copy(u.ray),Fe.intersectPlane(M,He),Fe.direction.negate(),Fe.intersectPlane(M,He),He.sub(w);let[$,ne]=co(C,P,He);k!==void 0&&($=Math.max($,k-E.current)),N!==void 0&&($=Math.min($,N-E.current)),x!==void 0&&(ne=Math.max(ne,x-W.current)),te!==void 0&&(ne=Math.min(ne,te-W.current)),r.current[(t+1)%3]=E.current+$,r.current[(t+2)%3]=W.current+ne,i&&(m.current.innerText=`${r.current[(t+1)%3].toFixed(2)}, ${r.current[(t+2)%3].toFixed(2)}`),It.makeTranslation($*C.x+ne*P.x,$*C.y+ne*P.y,$*C.z+ne*P.z),O(It)}},[i,O,H,r,n,t]),oe=o.useCallback(u=>{i&&(m.current.style.display="none"),u.stopPropagation(),T.current=null,U(),S&&(S.enabled=!0),u.target.releasePointerCapture(u.pointerId)},[i,S,U]),K=o.useCallback(u=>{u.stopPropagation(),z(!1)},[]),ee=o.useMemo(()=>{const u=s.clone().normalize(),w=e.clone().normalize();return new B().makeBasis(u,w,u.clone().cross(w))},[s,e]),_=p?1/7:f/7,I=p?.225:f*.225,y=H?b:l[t],v=o.useMemo(()=>[new d(0,0,0),new d(0,I,0),new d(I,I,0),new d(I,0,0),new d(0,0,0)],[I]);return o.createElement("group",{ref:g,matrix:ee,matrixAutoUpdate:!1},i&&o.createElement(tt,{position:[0,0,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:c,ref:m})),o.createElement("group",{position:[_*1.7,_*1.7,0]},o.createElement("mesh",{visible:!0,onPointerDown:J,onPointerMove:A,onPointerUp:oe,onPointerOut:K,scale:I,userData:R},o.createElement("planeGeometry",null),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:a,color:y,polygonOffset:!0,polygonOffsetFactor:-10,side:Ye,fog:!1})),o.createElement(Qe,{position:[-I/2,-I/2,0],transparent:!0,depthTest:a,points:v,lineWidth:h,color:y,opacity:F,polygonOffset:!0,polygonOffsetFactor:-10,userData:R,fog:!1})))},Oe=new d,jt=new d,lo=(s,e,t,r)=>{const n=e.dot(e),i=e.dot(s)-e.dot(t),c=e.dot(r);return c===0?-i/n:(Oe.copy(r).multiplyScalar(n/c).sub(e),jt.copy(r).multiplyScalar(i/c).add(t).sub(s),-Oe.dot(jt)/Oe.dot(Oe))},uo=new d(0,1,0),ze=new d,Ft=new B,pt=({direction:s,axis:e})=>{const{scaleLimits:t,annotations:r,annotationsClass:n,depthTest:i,scale:c,lineWidth:a,fixed:f,axisColors:h,hoveredColor:p,opacity:l,renderOrder:b,onDragStart:F,onDrag:L,onDragEnd:O,userData:U}=o.useContext(Ue),R=pe(u=>u.size),S=pe(u=>u.controls),m=o.useRef(null),g=o.useRef(null),T=o.useRef(null),E=o.useRef(1),W=o.useRef(1),H=o.useRef(null),[z,J]=o.useState(!1),A=f?1.2:1.2*c,oe=o.useCallback(u=>{r&&(m.current.innerText=`${W.current.toFixed(2)}`,m.current.style.display="block"),u.stopPropagation();const w=new B().extractRotation(g.current.matrixWorld),C=u.point.clone(),P=new d().setFromMatrixPosition(g.current.matrixWorld),M=s.clone().applyMatrix4(w).normalize(),k=g.current.matrixWorld.clone(),N=k.clone().invert(),x=f?1/vn(g.current.getWorldPosition(Oe),c,u.camera,R):1;H.current={clickPoint:C,dir:M,mPLG:k,mPLGInv:N,offsetMultiplier:x},F({component:"Sphere",axis:e,origin:P,directions:[M]}),S&&(S.enabled=!1),u.target.setPointerCapture(u.pointerId)},[r,S,s,F,e,f,c,R]),K=o.useCallback(u=>{if(u.stopPropagation(),z||J(!0),H.current){const{clickPoint:w,dir:C,mPLG:P,mPLGInv:M,offsetMultiplier:k}=H.current,[N,x]=(t==null?void 0:t[e])||[1e-5,void 0],$=lo(w,C,u.ray.origin,u.ray.direction)*k,ne=f?$:$/c;let j=Math.pow(2,ne*.2);u.shiftKey&&(j=Math.round(j*10)/10),j=Math.max(j,N/E.current),x!==void 0&&(j=Math.min(j,x/E.current)),W.current=E.current*j,T.current.position.set(0,A+$,0),r&&(m.current.innerText=`${W.current.toFixed(2)}`),ze.set(1,1,1),ze.setComponent(e,j),Ft.makeScale(ze.x,ze.y,ze.z).premultiply(P).multiply(M),L(Ft)}},[r,A,L,z,t,e]),ee=o.useCallback(u=>{r&&(m.current.style.display="none"),u.stopPropagation(),E.current=W.current,H.current=null,T.current.position.set(0,A,0),O(),S&&(S.enabled=!0),u.target.releasePointerCapture(u.pointerId)},[r,S,O,A]),_=o.useCallback(u=>{u.stopPropagation(),J(!1)},[]),{radius:I,matrixL:y}=o.useMemo(()=>{const u=f?a/c*1.8:c/22.5,w=new bt().setFromUnitVectors(uo,s.clone().normalize()),C=new B().makeRotationFromQuaternion(w);return{radius:u,matrixL:C}},[s,c,a,f]),v=z?p:h[e];return o.createElement("group",{ref:g},o.createElement("group",{matrix:y,matrixAutoUpdate:!1,onPointerDown:oe,onPointerMove:K,onPointerUp:ee,onPointerOut:_},r&&o.createElement(tt,{position:[0,A/2,0]},o.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:n,ref:m})),o.createElement("mesh",{ref:T,position:[0,A,0],renderOrder:b,userData:U},o.createElement("sphereGeometry",{args:[I,12,12]}),o.createElement("meshBasicMaterial",{transparent:!0,depthTest:i,color:v,opacity:l,polygonOffset:!0,polygonOffsetFactor:-10}))))},Ht=new B,kt=new B,Nt=new B,ke=new B,mt=new B,we=new B,$t=new B,Gt=new B,Vt=new B,Se=new me,ht=new me,qt=new d,Xt=new d,Zt=new d,Qt=new d,Le=new d,be=new d(1,0,0),Ee=new d(0,1,0),Me=new d(0,0,1),fo=o.forwardRef(({enabled:s=!0,matrix:e,onDragStart:t,onDrag:r,onDragEnd:n,autoTransform:i=!0,anchor:c,disableAxes:a=!1,disableSliders:f=!1,disableRotations:h=!1,disableScaling:p=!1,activeAxes:l=[!0,!0,!0],offset:b=[0,0,0],rotation:F=[0,0,0],scale:L=1,lineWidth:O=4,fixed:U=!1,translationLimits:R,rotationLimits:S,scaleLimits:m,depthTest:g=!0,renderOrder:T=500,axisColors:E=["#ff2060","#20df80","#2080ff"],hoveredColor:W="#ffff40",annotations:H=!1,annotationsClass:z,opacity:J=1,visible:A=!0,userData:oe,children:K,...ee},_)=>{const I=pe(x=>x.invalidate),y=o.useRef(null),v=o.useRef(null),u=o.useRef(null),w=o.useRef(null),C=o.useRef([0,0,0]),P=o.useRef(new d(1,1,1)),M=o.useRef(new d(1,1,1));o.useLayoutEffect(()=>{c&&(w.current.updateWorldMatrix(!0,!0),ke.copy(w.current.matrixWorld).invert(),Se.makeEmpty(),w.current.traverse(x=>{x.geometry&&(x.geometry.boundingBox||x.geometry.computeBoundingBox(),we.copy(x.matrixWorld).premultiply(ke),ht.copy(x.geometry.boundingBox),ht.applyMatrix4(we),Se.union(ht))}),qt.copy(Se.max).add(Se.min).multiplyScalar(.5),Xt.copy(Se.max).sub(Se.min).multiplyScalar(.5),Zt.copy(Xt).multiply(new d(...c)).add(qt),Qt.set(...b).add(Zt),u.current.position.copy(Qt),I())});const k=o.useMemo(()=>({onDragStart:x=>{Ht.copy(v.current.matrix),kt.copy(v.current.matrixWorld),t&&t(x),I()},onDrag:x=>{Nt.copy(y.current.matrixWorld),ke.copy(Nt).invert(),mt.copy(kt).premultiply(x),we.copy(mt).premultiply(ke),$t.copy(Ht).invert(),Gt.copy(we).multiply($t),i&&v.current.matrix.copy(we),r&&r(we,Gt,mt,x),I()},onDragEnd:()=>{n&&n(),I()},translation:C,translationLimits:R,rotationLimits:S,axisColors:E,hoveredColor:W,opacity:J,scale:L,lineWidth:O,fixed:U,depthTest:g,renderOrder:T,userData:oe,annotations:H,annotationsClass:z}),[t,r,n,C,R,S,m,g,L,O,U,...E,W,J,oe,i,H,z]),N=new d;return et(x=>{if(U){const te=vn(u.current.getWorldPosition(N),L,x.camera,x.size);P.current.setScalar(te)}e&&e instanceof B&&(v.current.matrix=e),v.current.updateWorldMatrix(!0,!0),Vt.makeRotationFromEuler(u.current.rotation).setPosition(u.current.position).premultiply(v.current.matrixWorld),M.current.setFromMatrixScale(Vt),Le.copy(P.current).divide(M.current),(Math.abs(u.current.scale.x-Le.x)>1e-4||Math.abs(u.current.scale.y-Le.y)>1e-4||Math.abs(u.current.scale.z-Le.z)>1e-4)&&(u.current.scale.copy(Le),x.invalidate())}),o.useImperativeHandle(_,()=>v.current,[]),o.createElement(Ue.Provider,{value:k},o.createElement("group",{ref:y},o.createElement("group",Ze({ref:v,matrix:e,matrixAutoUpdate:!1},ee),o.createElement("group",{visible:A,ref:u,position:b,rotation:F},s&&o.createElement(o.Fragment,null,!a&&l[0]&&o.createElement(st,{axis:0,direction:be}),!a&&l[1]&&o.createElement(st,{axis:1,direction:Ee}),!a&&l[2]&&o.createElement(st,{axis:2,direction:Me}),!f&&l[0]&&l[1]&&o.createElement(ft,{axis:2,dir1:be,dir2:Ee}),!f&&l[0]&&l[2]&&o.createElement(ft,{axis:1,dir1:Me,dir2:be}),!f&&l[2]&&l[1]&&o.createElement(ft,{axis:0,dir1:Ee,dir2:Me}),!h&&l[0]&&l[1]&&o.createElement(dt,{axis:2,dir1:be,dir2:Ee}),!h&&l[0]&&l[2]&&o.createElement(dt,{axis:1,dir1:Me,dir2:be}),!h&&l[2]&&l[1]&&o.createElement(dt,{axis:0,dir1:Ee,dir2:Me}),!p&&l[0]&&o.createElement(pt,{axis:0,direction:be}),!p&&l[1]&&o.createElement(pt,{axis:1,direction:Ee}),!p&&l[2]&&o.createElement(pt,{axis:2,direction:Me}))),o.createElement("group",{ref:w},K))))}),po=o.forwardRef(function({children:e,...t},r){const n=pe(i=>i.gl);return G.jsx(xt,{plugin:Wn,args:{renderer:n,...t},ref:r,children:e})}),mo=o.forwardRef(function(e,t){const{type:r,order:n=null,opacity:i=1,color:c=16777215,worldToProjection:a=null,...f}=e,h=o.useContext(An),p=o.useContext(Un),l=o.useMemo(()=>new r(f),[r,yo(f)]);o.useEffect(()=>(h.addOverlay(l,n),()=>{h.deleteOverlay(l)}),[l,h]),o.useEffect(()=>{h.setOverlayOrder(l,n)},[l,h,n]),o.useEffect(()=>{l.opacity=i,l.color.set(c),a&&!l.frame?l.frame=new B:!a&&l.frame&&(l.frame=null)},[l,i,c,a]),et(()=>{a&&p&&l.frame.copy(a).multiply(p.group.matrixWorld)}),ho(l,t)});function ho(s,...e){o.useEffect(()=>{e.forEach(t=>{t&&(t instanceof Function?t(s):t.current=s)})},[s,...e])}function go(s,e){if(s===e)return!0;if(!s||!e)return s===e;for(const t in s)if(s[t]!==e[t])return!1;for(const t in e)if(s[t]!==e[t])return!1;return!0}function yo(s){const e=o.useRef();return go(e.current,s)||(e.current=s),e.current}const Yt=new me,Ne=new d;class xn extends rn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new _e(t,6,1);return this.setAttribute("instanceStart",new re(r,3,0)),this.setAttribute("instanceEnd",new re(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new _e(t,6,1);return this.setAttribute("instanceColorStart",new re(r,3,0)),this.setAttribute("instanceColorEnd",new re(r,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new sn(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new me);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Yt.setFromBufferAttribute(t),this.boundingBox.union(Yt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,c=e.count;i<c;i++)Ne.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(Ne)),Ne.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(Ne));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ve.line={uniforms:Xe.merge([Pe.common,Pe.fog,Pe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class vo extends an{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Xe.clone(Ve.line.uniforms),vertexShader:Ve.line.vertexShader,fragmentShader:Ve.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const gt=new ie,Jt=new d,Kt=new d,X=new ie,Z=new ie,ce=new ie,yt=new d,vt=new B,Y=new ln,en=new d,$e=new me,Ge=new Ke,le=new ie;let de,xe;function tn(s,e,t){return le.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),le.multiplyScalar(1/le.w),le.x=xe/t.width,le.y=xe/t.height,le.applyMatrix4(s.projectionMatrixInverse),le.multiplyScalar(1/le.w),Math.abs(Math.max(le.x,le.y))}function xo(s,e){const t=s.matrixWorld,r=s.geometry,n=r.attributes.instanceStart,i=r.attributes.instanceEnd,c=Math.min(r.instanceCount,n.count);for(let a=0,f=c;a<f;a++){Y.start.fromBufferAttribute(n,a),Y.end.fromBufferAttribute(i,a),Y.applyMatrix4(t);const h=new d,p=new d;de.distanceSqToSegment(Y.start,Y.end,p,h),p.distanceTo(h)<xe*.5&&e.push({point:p,pointOnLine:h,distance:de.origin.distanceTo(p),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function wo(s,e,t){const r=e.projectionMatrix,i=s.material.resolution,c=s.matrixWorld,a=s.geometry,f=a.attributes.instanceStart,h=a.attributes.instanceEnd,p=Math.min(a.instanceCount,f.count),l=-e.near;de.at(1,ce),ce.w=1,ce.applyMatrix4(e.matrixWorldInverse),ce.applyMatrix4(r),ce.multiplyScalar(1/ce.w),ce.x*=i.x/2,ce.y*=i.y/2,ce.z=0,yt.copy(ce),vt.multiplyMatrices(e.matrixWorldInverse,c);for(let b=0,F=p;b<F;b++){if(X.fromBufferAttribute(f,b),Z.fromBufferAttribute(h,b),X.w=1,Z.w=1,X.applyMatrix4(vt),Z.applyMatrix4(vt),X.z>l&&Z.z>l)continue;if(X.z>l){const m=X.z-Z.z,g=(X.z-l)/m;X.lerp(Z,g)}else if(Z.z>l){const m=Z.z-X.z,g=(Z.z-l)/m;Z.lerp(X,g)}X.applyMatrix4(r),Z.applyMatrix4(r),X.multiplyScalar(1/X.w),Z.multiplyScalar(1/Z.w),X.x*=i.x/2,X.y*=i.y/2,Z.x*=i.x/2,Z.y*=i.y/2,Y.start.copy(X),Y.start.z=0,Y.end.copy(Z),Y.end.z=0;const O=Y.closestPointToPointParameter(yt,!0);Y.at(O,en);const U=St.lerp(X.z,Z.z,O),R=U>=-1&&U<=1,S=yt.distanceTo(en)<xe*.5;if(R&&S){Y.start.fromBufferAttribute(f,b),Y.end.fromBufferAttribute(h,b),Y.start.applyMatrix4(c),Y.end.applyMatrix4(c);const m=new d,g=new d;de.distanceSqToSegment(Y.start,Y.end,g,m),t.push({point:g,pointOnLine:m,distance:de.origin.distanceTo(g),object:s,face:null,faceIndex:b,uv:null,uv1:null})}}}class So extends cn{constructor(e=new xn,t=new vo({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let c=0,a=0,f=t.count;c<f;c++,a+=2)Jt.fromBufferAttribute(t,c),Kt.fromBufferAttribute(r,c),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jt.distanceTo(Kt);const i=new _e(n,2,1);return e.setAttribute("instanceDistanceStart",new re(i,1,0)),e.setAttribute("instanceDistanceEnd",new re(i,1,1)),this}raycast(e,t){const r=this.material.worldUnits,n=e.camera;n===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;de=e.ray;const c=this.matrixWorld,a=this.geometry,f=this.material;xe=f.linewidth+i,a.boundingSphere===null&&a.computeBoundingSphere(),Ge.copy(a.boundingSphere).applyMatrix4(c);let h;if(r)h=xe*.5;else{const l=Math.max(n.near,Ge.distanceToPoint(de.origin));h=tn(n,l,f.resolution)}if(Ge.radius+=h,de.intersectsSphere(Ge)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),$e.copy(a.boundingBox).applyMatrix4(c);let p;if(r)p=xe*.5;else{const l=Math.max(n.near,$e.distanceToPoint(de.origin));p=tn(n,l,f.resolution)}$e.expandByScalar(p),de.intersectsBox($e)!==!1&&(r?xo(this,t):wo(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(gt),this.material.uniforms.resolution.value.set(gt.z,gt.w))}}const bo="https://raw.githubusercontent.com/NASA-AMMOS/3DTilesSampleData/master/msl-dingo-gap/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize/0528_0260184_to_s64o256_colorize_tileset.json";function Eo(){const[s,e]=o.useState(null),[t,r]=o.useState(null),n=o.useMemo(()=>{const a=new d().set(40,40,20),f=new d(-a.x,10,a.y*.25),h=new zn(-Math.PI/2),p=new bt().setFromEuler(h);return new B().compose(f,p,a)},[]),i=o.useMemo(()=>{const a=new Ln;a.translate(.5,.5,.5);const f=new On(a),h=new xn().fromEdgesGeometry(f),p=new So(h);return p.material.color.set(16776960),p.material.linewidth=2,p},[]),c=o.useMemo(()=>new B,[]);return o.useEffect(()=>()=>{i.geometry.dispose(),i.material.dispose()},[i]),et(()=>{t&&i&&(i.scale.x=t.aspectRatio,c.copy(s.matrixWorld).invert())}),G.jsxs(G.Fragment,{children:[G.jsx("color",{attach:"background",args:[2236962]}),G.jsx("group",{"rotation-x":Math.PI/2,children:G.jsxs(Dn,{url:bo,children:[G.jsx(xt,{plugin:Tn,fadeDuration:500}),G.jsx(po,{children:G.jsx(mo,{type:In,assetId:"3954",apiToken:"",worldToProjection:c,ref:r})}),G.jsx(xt,{plugin:jn})]})}),G.jsx(Bn,{enableDamping:!0,maxDistance:1e3,minDistance:1,cameraRadius:0}),G.jsx(fo,{scale:150,matrix:n,fixed:!0,children:G.jsx("group",{ref:e,"position-z":-1,children:G.jsx("primitive",{object:i})})})]})}function Mo(){return G.jsx(Rn,{frameloop:"demand",camera:{position:[0,40,35]},style:{width:"100%",height:"100%",position:"absolute",margin:0,left:0,top:0},onContextMenu:s=>{s.preventDefault()},children:G.jsx(Eo,{})})}fn.createRoot(document.getElementById("root")).render(G.jsx(o.StrictMode,{children:G.jsx(Mo,{})}));
//# sourceMappingURL=projection-5wlVIQxX.js.map
