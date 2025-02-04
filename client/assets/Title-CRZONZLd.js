import{r as F,n as m,q as ze}from"./chunk-IR6S3I6Y-B-FaP476.js";import{u as Ce,y as Ne,z as we,q as ie,j as I,s as j,U as xe,t as E,r as P,C as me,E as oe,i as L,B,F as W,G as fe}from"./ActivitiesContex-BoMGjC-E.js";import{u as Pe}from"./use-isomorphic-effect-Cdi6Bh97.js";function he(s=null){const e=F.createContext(s);return[({children:r,value:o})=>m.jsx(e.Provider,{value:o,children:r}),()=>F.useContext(e)]}function Be(s="mantine-"){return`${s}${Math.random().toString(36).slice(2,11)}`}const je=ze.useId||(()=>{});function Re(){const s=je();return s?`mantine-${s.replace(/:/g,"")}`:""}function We(s){const e=Re(),[t,n]=F.useState(e);return Pe(()=>{n(Be())},[]),typeof s=="string"?s:typeof window>"u"?e:t}function Ee({classNames:s,styles:e,props:t,stylesCtx:n}){const r=Ce();return{resolvedClassNames:we({theme:r,classNames:s,props:t,stylesCtx:n||void 0}),resolvedStyles:Ne({theme:r,styles:e,props:t,stylesCtx:n||void 0})}}const ye=F.forwardRef(({size:s="var(--cb-icon-size, 70%)",style:e,...t},n)=>m.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:s,height:s},ref:n,...t,children:m.jsx("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}));ye.displayName="@mantine/core/CloseIcon";var ve={root:"m_86a44da5","root--subtle":"m_220c80f2"};const Le={variant:"subtle"},Ae=E((s,{size:e,radius:t,iconSize:n})=>({root:{"--cb-size":oe(e,"cb-size"),"--cb-radius":t===void 0?void 0:me(t),"--cb-icon-size":P(n)}})),ae=ie((s,e)=>{const t=I("CloseButton",Le,s),{iconSize:n,children:r,vars:o,radius:h,className:y,classNames:a,style:l,styles:v,unstyled:c,"data-disabled":g,disabled:p,variant:i,icon:d,mod:f,__staticSelector:z,..._}=t,u=j({name:z||"CloseButton",props:t,className:y,style:l,classes:ve,classNames:a,styles:v,unstyled:c,vars:o,varsResolver:Ae});return m.jsxs(xe,{ref:e,..._,unstyled:c,variant:i,disabled:p,mod:[{disabled:p||g},f],...u("root",{variant:i,active:!p&&!g}),children:[d||m.jsx(ye,{}),r]})});ae.classes=ve;ae.displayName="@mantine/core/CloseButton";const[Te,qe]=he({size:"sm"}),De={},_e=L((s,e)=>{const t=I("InputClearButton",De,s),{size:n,variant:r,vars:o,classNames:h,styles:y,...a}=t,l=qe(),{resolvedClassNames:v,resolvedStyles:c}=Ee({classNames:h,styles:y,props:t});return m.jsx(ae,{variant:r||"transparent",ref:e,size:n||(l==null?void 0:l.size)||"sm",classNames:v,styles:c,__staticSelector:"InputClearButton",...a})});_e.displayName="@mantine/core/InputClearButton";const[Fe,Q]=he({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var $={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const de={},ke=E((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${W(e)} - ${P(2)})`}})),X=L((s,e)=>{const t=I("InputDescription",de,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,vars:a,size:l,__staticSelector:v,__inheritStyles:c=!0,variant:g,...p}=I("InputDescription",de,t),i=Q(),d=j({name:["InputWrapper",v],props:t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,rootSelector:"description",vars:a,varsResolver:ke}),f=c&&(i==null?void 0:i.getStyles)||d;return m.jsx(B,{component:"p",ref:e,variant:g,size:l,...f("description",i!=null&&i.getStyles?{className:r,style:o}:void 0),...p})});X.classes=$;X.displayName="@mantine/core/InputDescription";const Oe={},He=E((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${W(e)} - ${P(2)})`}})),Y=L((s,e)=>{const t=I("InputError",Oe,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,vars:a,size:l,__staticSelector:v,__inheritStyles:c=!0,variant:g,...p}=t,i=j({name:["InputWrapper",v],props:t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,rootSelector:"error",vars:a,varsResolver:He}),d=Q(),f=c&&(d==null?void 0:d.getStyles)||i;return m.jsx(B,{component:"p",ref:e,variant:g,size:l,...f("error",d!=null&&d.getStyles?{className:r,style:o}:void 0),...p})});Y.classes=$;Y.displayName="@mantine/core/InputError";const ue={labelElement:"label"},Me=E((s,{size:e})=>({label:{"--input-label-size":W(e),"--input-asterisk-color":void 0}})),ee=L((s,e)=>{const t=I("InputLabel",ue,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,vars:a,labelElement:l,size:v,required:c,htmlFor:g,onMouseDown:p,children:i,__staticSelector:d,variant:f,mod:z,..._}=I("InputLabel",ue,t),u=j({name:["InputWrapper",d],props:t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,rootSelector:"label",vars:a,varsResolver:Me}),C=Q(),R=(C==null?void 0:C.getStyles)||u;return m.jsxs(B,{...R("label",C!=null&&C.getStyles?{className:r,style:o}:void 0),component:l,variant:f,size:v,ref:e,htmlFor:l==="label"?g:void 0,mod:[{required:c},z],onMouseDown:N=>{p==null||p(N),!N.defaultPrevented&&N.detail>1&&N.preventDefault()},..._,children:[i,c&&m.jsx("span",{...R("required"),"aria-hidden":!0,children:" *"})]})});ee.classes=$;ee.displayName="@mantine/core/InputLabel";const pe={},le=L((s,e)=>{const t=I("InputPlaceholder",pe,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,vars:a,__staticSelector:l,variant:v,error:c,mod:g,...p}=I("InputPlaceholder",pe,t),i=j({name:["InputPlaceholder",l],props:t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,rootSelector:"placeholder"});return m.jsx(B,{...i("placeholder"),mod:[{error:!!c},g],component:"span",variant:v,ref:e,...p})});le.classes=$;le.displayName="@mantine/core/InputPlaceholder";function Ue(s,{hasDescription:e,hasError:t}){const n=s.findIndex(a=>a==="input"),r=s.slice(0,n),o=s.slice(n+1),h=e&&r.includes("description")||t&&r.includes("error");return{offsetBottom:e&&o.includes("description")||t&&o.includes("error"),offsetTop:h}}const Ve={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},Ge=E((s,{size:e})=>({label:{"--input-label-size":W(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${W(e)} - ${P(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${W(e)} - ${P(2)})`}})),ce=L((s,e)=>{const t=I("InputWrapper",Ve,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,vars:a,size:l,variant:v,__staticSelector:c,inputContainer:g,inputWrapperOrder:p,label:i,error:d,description:f,labelProps:z,descriptionProps:_,errorProps:u,labelElement:C,children:R,withAsterisk:N,id:A,required:T,__stylesApiProps:M,mod:k,...U}=t,q=j({name:["InputWrapper",c],props:M||t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,vars:a,varsResolver:Ge}),w={size:l,variant:v,__staticSelector:c},x=We(A),te=typeof N=="boolean"?N:T,V=(u==null?void 0:u.id)||`${x}-error`,G=(_==null?void 0:_.id)||`${x}-description`,Z=x,O=!!d&&typeof d!="boolean",H=!!f,J=`${O?V:""} ${H?G:""}`,se=J.trim().length>0?J.trim():void 0,S=(z==null?void 0:z.id)||`${x}-label`,ne=i&&m.jsx(ee,{labelElement:C,id:S,htmlFor:Z,required:te,...w,...z,children:i},"label"),D=H&&m.jsx(X,{..._,...w,size:(_==null?void 0:_.size)||w.size,id:(_==null?void 0:_.id)||G,children:f},"description"),re=m.jsx(F.Fragment,{children:g(R)},"input"),K=O&&F.createElement(Y,{...u,...w,size:(u==null?void 0:u.size)||w.size,key:"error",id:(u==null?void 0:u.id)||V},d),be=p.map($e=>{switch($e){case"label":return ne;case"input":return re;case"description":return D;case"error":return K;default:return null}});return m.jsx(Fe,{value:{getStyles:q,describedBy:se,inputId:Z,labelId:S,...Ue(p,{hasDescription:H,hasError:O})},children:m.jsx(B,{ref:e,variant:v,size:l,mod:[{error:!!d},k],...q("root"),...U,children:be})})});ce.classes=$;ce.displayName="@mantine/core/InputWrapper";const Ze={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},Je=E((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":oe(e.size,"input-height"),"--input-fz":W(e.size),"--input-radius":e.radius===void 0?void 0:me(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?P(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?P(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?oe(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),b=ie((s,e)=>{const t=I("Input",Ze,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,required:a,__staticSelector:l,__stylesApiProps:v,size:c,wrapperProps:g,error:p,disabled:i,leftSection:d,leftSectionProps:f,leftSectionWidth:z,rightSection:_,rightSectionProps:u,rightSectionWidth:C,rightSectionPointerEvents:R,leftSectionPointerEvents:N,variant:A,vars:T,pointer:M,multiline:k,radius:U,id:q,withAria:w,withErrorStyles:x,mod:te,inputSize:V,__clearSection:G,__clearable:Z,__defaultRightSection:O,...H}=t,{styleProps:J,rest:se}=fe(H),S=Q(),ne={offsetBottom:S==null?void 0:S.offsetBottom,offsetTop:S==null?void 0:S.offsetTop},D=j({name:["Input",l],props:v||t,classes:$,className:r,style:o,classNames:n,styles:h,unstyled:y,stylesCtx:ne,rootSelector:"wrapper",vars:T,varsResolver:Je}),re=w?{required:a,disabled:i,"aria-invalid":!!p,"aria-describedby":S==null?void 0:S.describedBy,id:(S==null?void 0:S.inputId)||q}:{},K=_||Z&&G||O;return m.jsx(Te,{value:{size:c||"sm"},children:m.jsxs(B,{...D("wrapper"),...J,...g,mod:[{error:!!p&&x,pointer:M,disabled:i,multiline:k,"data-with-right-section":!!_,"data-with-left-section":!!d},te],variant:A,size:c,children:[d&&m.jsx("div",{...f,"data-position":"left",...D("section",{className:f==null?void 0:f.className,style:f==null?void 0:f.style}),children:d}),m.jsx(B,{component:"input",...se,...re,ref:e,required:a,mod:{disabled:i,error:!!p&&x},variant:A,__size:V,...D("input")}),K&&m.jsx("div",{...u,"data-position":"right",...D("section",{className:u==null?void 0:u.className,style:u==null?void 0:u.style}),children:K})]})})});b.classes=$;b.Wrapper=ce;b.Label=ee;b.Error=Y;b.Description=X;b.Placeholder=le;b.ClearButton=_e;b.displayName="@mantine/core/Input";function Ke(s,e,t){const n=I(s,e,t),{label:r,description:o,error:h,required:y,classNames:a,styles:l,className:v,unstyled:c,__staticSelector:g,__stylesApiProps:p,errorProps:i,labelProps:d,descriptionProps:f,wrapperProps:z,id:_,size:u,style:C,inputContainer:R,inputWrapperOrder:N,withAsterisk:A,variant:T,vars:M,mod:k,...U}=n,{styleProps:q,rest:w}=fe(U),x={label:r,description:o,error:h,required:y,classNames:a,className:v,__staticSelector:g,__stylesApiProps:p||n,errorProps:i,labelProps:d,descriptionProps:f,unstyled:c,styles:l,size:u,style:C,inputContainer:R,inputWrapperOrder:N,withAsterisk:A,variant:T,id:_,mod:k,...z};return{...w,classNames:a,styles:l,unstyled:c,wrapperProps:{...x,...q},inputProps:{required:y,classNames:a,styles:l,unstyled:c,size:u,__staticSelector:g,__stylesApiProps:p||n,error:h,variant:T,id:_}}}const Qe={__staticSelector:"InputBase",withAria:!0},ge=ie((s,e)=>{const{inputProps:t,wrapperProps:n,...r}=Ke("InputBase",Qe,s);return m.jsx(b.Wrapper,{...n,children:m.jsx(b,{...t,...r,ref:e})})});ge.classes={...b.classes,...b.Wrapper.classes};ge.displayName="@mantine/core/InputBase";const Xe=["h1","h2","h3","h4","h5","h6"],Ye=["xs","sm","md","lg","xl"];function et(s,e){const t=e!==void 0?e:`h${s}`;return Xe.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:Ye.includes(t)?{fontSize:`var(--mantine-font-size-${t})`,fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}:{fontSize:P(t),fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}}var Se={root:"m_8a5d1357"};const tt={order:1},st=E((s,{order:e,size:t,lineClamp:n,textWrap:r})=>{const o=et(e,t);return{root:{"--title-fw":o.fontWeight,"--title-lh":o.lineHeight,"--title-fz":o.fontSize,"--title-line-clamp":typeof n=="number"?n.toString():void 0,"--title-text-wrap":r}}}),Ie=L((s,e)=>{const t=I("Title",tt,s),{classNames:n,className:r,style:o,styles:h,unstyled:y,order:a,vars:l,size:v,variant:c,lineClamp:g,textWrap:p,mod:i,...d}=t,f=j({name:"Title",props:t,classes:Se,className:r,style:o,classNames:n,styles:h,unstyled:y,vars:l,varsResolver:st});return[1,2,3,4,5,6].includes(a)?m.jsx(B,{...f("root"),component:`h${a}`,variant:c,ref:e,mod:[{order:a,"data-line-clamp":typeof g=="number"},i],size:v,...d}):null});Ie.classes=Se;Ie.displayName="@mantine/core/Title";export{ae as C,ge as I,Ie as T,b as a,Ee as u};
