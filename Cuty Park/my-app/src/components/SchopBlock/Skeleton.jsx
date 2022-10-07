import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={301}
    height={425}
    viewBox="0 0 301 425"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="47" y="26" rx="0" ry="0" width="190" height="118" /> 
    <rect x="32" y="163" rx="0" ry="0" width="70" height="27" /> 
    <rect x="29" y="208" rx="0" ry="0" width="71" height="30" /> 
    <rect x="55" y="218" rx="0" ry="0" width="14" height="5" /> 
    <rect x="52" y="341" rx="0" ry="0" width="195" height="37" /> 
    <rect x="174" y="363" rx="0" ry="0" width="13" height="2" />
  </ContentLoader>
);

export default Skeleton;