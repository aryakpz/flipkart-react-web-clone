export type productPropType={
    nav:navPropType;
    drop:dropProps[];
    left:leftSideProp;
    right:rightProp[];
    content:string;
    sortsec:sortProp;
    link:linkProps[];
    phonesec:phoneProps[];
    footer:footerProps;
    section:sectionProps[];

}

export type navPropType = {
    fliplogo: string;
    explore: string;
    plus: string;
    plogo: string;
    search: string;
    login: string;
    seller: string;
    more: string;
    down: string;
    cartimg: string;
    cart: string;
};


export type dropProps = {
    data: string;
    icon: string;
}

export type leftSideProp={
    filter:string;
    clear:string;
    category:string;
    image:string;
    access:string;
    mobile:string;
    price:string;
    min:string[]|number[];
    max:string[]|number[];
    brand:string;
    bimg:string;
    brandnames:string[];
    class:string;
    more:string;
    toparrow:string;
    assure:string;
    
}

export type rightProp={
    val:string;
    icon:string;
}

export type sortProp={
    name:string;
    id:string;
}
export type linkProps={
    name:string;
    id: string;
    class:string;
}
export type phoneProps={
    id:string;
    phone:string;
    compare:string;
    name:string;
    heart:string;
    data:string;
    rateimg:string;
    review:string;
    speciality:specialityProps[];
    price:string;
    asure:string;
    img:string;
    strike:string;
    off:string;
    free:string;
    save:string;
    exchange:string;
}

export type specialityProps={
    data:string;
    id:string;
}

export type footerProps={
  foot1:foot1Props[];
  social:string;
  loop:string[];
  bottom:bottomProps[];

}

export type foot1Props={
    name:string;
    id:string;
    loop:loppItemProps[];
}

export type loppItemProps=string;

export type bottomProps={
    img:string;
    data:string;
}

export type sectionProps={
    name:string;
    common:string;
    id:string;
    subid:string;
    checkdatas:checkboxProps[];
    class:string
}

export type checkboxProps=string;