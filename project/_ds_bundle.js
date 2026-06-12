/* @ds-bundle: {"format":3,"namespace":"PrettilyPoppedDesignSystem_13a0cc","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"d4e4bdec75b8","components/core/Card.jsx":"ac82b2cd279a","components/core/Input.jsx":"16c83b0af9fd","components/core/Tag.jsx":"90844928cbe4","components/marketing/SectionHeading.jsx":"5c30a2b78f3a","components/marketing/ServiceCard.jsx":"3b7474a3ce9f","ui_kits/website/About.jsx":"2d0011005426","ui_kits/website/Contact.jsx":"ec6cbba3cadd","ui_kits/website/Footer.jsx":"aa7bda6c92ed","ui_kits/website/Gallery.jsx":"58bab7f26784","ui_kits/website/Home.jsx":"547aa9e2b6a4","ui_kits/website/Nav.jsx":"6e0d3950e14d","ui_kits/website/Services.jsx":"c1cb16d81bd1","ui_kits/website/data.js":"a14223a6afa2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrettilyPoppedDesignSystem_13a0cc = window.PrettilyPoppedDesignSystem_13a0cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — Button
 * Balloon-round, warm, tactile. Pill by default.
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = true,
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  as,
  href,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '8px 16px',
      gap: '7px'
    },
    md: {
      fontSize: '15px',
      padding: '12px 24px',
      gap: '8px'
    },
    lg: {
      fontSize: '17px',
      padding: '15px 32px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--text-on-primary)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-rose)'
    },
    secondary: {
      background: 'var(--white-warm)',
      color: 'var(--berry-600)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: '#fff',
      border: '1.5px solid transparent',
      boxShadow: '0 12px 30px rgba(168,126,51,0.28)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--berry-600)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.01em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-buoyant), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--primary-hover)';
    if (variant === 'gold') e.currentTarget.style.background = 'var(--gold-600)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--rose-50)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--rose-50)';
  };
  const hoverOut = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.background = variants[variant].background;
  };
  const Tag = as || (href ? 'a' : 'button');
  const extra = Tag === 'button' ? {
    disabled,
    type: rest.type || 'button'
  } : {
    href
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, extra, rest), leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — Card
 * Warm-white surface with soft border + gentle shadow.
 * `interactive` adds a buoyant hover lift.
 */
function Card({
  padding = 'md',
  interactive = false,
  tone = 'card',
  children,
  style = {},
  ...rest
}) {
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-7)'
  };
  const tones = {
    card: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)'
    },
    soft: {
      background: 'var(--surface-soft)',
      border: '1.5px solid var(--rose-100)'
    },
    shell: {
      background: 'var(--surface-shell)',
      border: '1.5px solid transparent'
    },
    ink: {
      background: 'var(--surface-ink)',
      border: '1.5px solid transparent'
    }
  };
  const s = {
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    padding: pads[padding],
    transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    color: tone === 'ink' ? 'var(--text-on-ink)' : 'var(--text-body)',
    ...tones[tone],
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — Input
 * Soft, friendly text field with optional label & helper text.
 */
function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  textarea = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-strong)',
    width: '100%',
    padding: textarea ? '12px 16px' : '12px 18px',
    background: 'var(--white-warm)',
    border: `1.5px solid ${error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--border-strong)'}`,
    borderRadius: textarea ? 'var(--radius-md)' : 'var(--radius-pill)',
    outline: 'none',
    boxShadow: focused ? '0 0 0 4px var(--ring)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    resize: textarea ? 'vertical' : undefined,
    minHeight: textarea ? '96px' : undefined,
    ...style
  };
  const Field = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '0.01em',
      paddingLeft: '4px'
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: inputId,
    type: textarea ? undefined : type,
    style: fieldStyle,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      paddingLeft: '4px',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — Tag
 * Soft pill chip in balloon hues. For categories, statuses, price labels.
 */
function Tag({
  tone = 'rose',
  size = 'md',
  solid = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    rose: {
      soft: 'var(--rose-100)',
      ink: 'var(--berry-700)',
      solidBg: 'var(--rose-500)'
    },
    gold: {
      soft: 'var(--gold-100)',
      ink: 'var(--gold-600)',
      solidBg: 'var(--gold-500)'
    },
    sage: {
      soft: '#E1EADF',
      ink: '#4F6B4C',
      solidBg: 'var(--balloon-sage)'
    },
    powder: {
      soft: '#E2EEF3',
      ink: '#3E677A',
      solidBg: 'var(--balloon-powder)'
    },
    lilac: {
      soft: '#EEE6F2',
      ink: '#6A4F7C',
      solidBg: 'var(--balloon-lilac)'
    },
    plum: {
      soft: 'var(--shell)',
      ink: 'var(--plum-800)',
      solidBg: 'var(--plum-800)'
    }
  };
  const t = tones[tone] || tones.rose;
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '3px 10px'
    },
    md: {
      fontSize: '12.5px',
      padding: '5px 13px'
    }
  };
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1.2,
    background: solid ? t.solidBg : t.soft,
    color: solid ? '#fff' : t.ink,
    ...sizes[size],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — SectionHeading
 * Eyebrow + display title (+ optional script accent & lead).
 * The signature heading lockup used across marketing sections.
 */
function SectionHeading({
  eyebrow,
  title,
  script,
  lead,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '640px' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: '11px',
      fontWeight: 700,
      color: onDark ? 'var(--gold-400)' : 'var(--primary)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      margin: 0,
      fontSize: 'clamp(28px, 4vw, 44px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: onDark ? 'var(--text-on-ink)' : 'var(--text-strong)'
    }
  }, title, script && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      color: onDark ? 'var(--gold-400)' : 'var(--primary)',
      fontSize: '0.78em',
      marginLeft: '0.2em',
      letterSpacing: 0
    }
  }, script)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '17px',
      lineHeight: 1.6,
      margin: '4px 0 0',
      color: onDark ? 'var(--text-on-ink)' : 'var(--text-body)',
      maxWidth: '52ch',
      opacity: onDark ? 0.85 : 1
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prettily Popped — ServiceCard
 * Showcases a balloon service/product: photo, name, blurb, price.
 * Falls back to a soft balloon-hue placeholder when no image is given.
 */
function ServiceCard({
  name,
  price,
  unit = '',
  blurb,
  image,
  tone = 'blush',
  badge,
  ctaLabel = 'Request this',
  onSelect,
  style = {},
  ...rest
}) {
  const placeholders = {
    blush: 'linear-gradient(135deg, #F7DCD9 0%, #EFC5C5 100%)',
    peach: 'linear-gradient(135deg, #F7E0CC 0%, #F3CBA8 100%)',
    gold: 'linear-gradient(135deg, #F6EAD0 0%, #E6CB8E 100%)',
    sage: 'linear-gradient(135deg, #E1EADF 0%, #AFC3AC 100%)',
    powder: 'linear-gradient(135deg, #E2EEF3 0%, #B7D2DD 100%)',
    lilac: 'linear-gradient(135deg, #EEE6F2 0%, #C9B6D6 100%)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: placeholders[tone] || placeholders.blush
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'rgba(58,34,48,0.32)'
    }
  }, "Prettily Popped"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "gold",
    solid: true,
    size: "sm"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, name), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.5,
      flex: 1
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: '4px',
      paddingTop: '12px',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 600,
      color: 'var(--berry-600)'
    }
  }, price), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("button", {
    onClick: onSelect,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--berry-600)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, ctaLabel, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      transition: 'transform var(--dur-fast)',
      transform: hover ? 'translateX(3px)' : 'none'
    }
  }, "\u2192")))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
// Prettily Popped — About screen (Erin's story)
function PPAbout({
  onNav
}) {
  const {
    Button,
    Tag,
    SectionHeading
  } = window.PrettilyPoppedDesignSystem_13a0cc;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: '52px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(150deg, #EEE6F2, #C9B6D6 60%, #EFC5C5)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '34px',
      color: 'rgba(58,34,48,0.30)'
    }
  }, "Erin's photo")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--primary)'
    }
  }, "Hello, I'm Erin"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(32px, 4vw, 48px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: 'var(--plum-900)',
      margin: '8px 0 22px'
    }
  }, "Owner & balloon artist behind Prettily Popped."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '17px',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "I've always had a strong passion for all things party and event related. I've been part of SO many gatherings where my role was to design, decorate and perfect the space \u2014 a role I", /*#__PURE__*/React.createElement("strong", null, " love"), ", take seriously and, quite frankly, am good at!"), /*#__PURE__*/React.createElement("p", null, "After building a giant balloon garland for a work event and hearing how much everyone enjoyed it, I thought: hey, I just might have something here. And so, Prettily Popped was born."), /*#__PURE__*/React.createElement("p", null, "I'm having so much fun creating custom pieces for my hometown of Fredericton \u2014 and I'm certain I can make your next event pop, big or small.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      margin: '24px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "rose"
  }, "Handmade"), /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, "Fredericton, NB"), /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, "Delivery & install")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Let's work together"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-shell)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px'
    }
  }, [['Made by hand', 'Every garland and column is built by me, piece by piece — never mass-produced.'], ['Your colours, your vibe', 'I design around your theme so it feels unmistakably yours.'], ['Stress-free', 'I deliver and install on-site, so you can simply enjoy the day.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      fontSize: '15px',
      lineHeight: 1.6
    }
  }, d))))));
}
window.PPAbout = PPAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// Prettily Popped — Contact / quote request screen
function PPContact({
  onNav
}) {
  const {
    Button,
    Tag,
    Input,
    Card,
    SectionHeading
  } = window.PrettilyPoppedDesignSystem_13a0cc;
  const data = window.PPData;
  const [sent, setSent] = React.useState(false);
  const [type, setType] = React.useState('Birthdays');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--rose-50), var(--cream))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '960px',
      margin: '0 auto',
      padding: '64px 28px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch",
    title: "Let's make it",
    script: "pop"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '17px',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '18px 0 28px'
    }
  }, "Tell me a little about your event and I'll get back to you within a day with ideas and a quote. No question is too big or too small!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, [['Where', 'Fredericton & surrounding areas'], ['Travel', 'A little further for a small mileage fee'], ['Email', 'hello@prettilypopped.com']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--primary)',
      width: '64px',
      flex: 'none'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15.5px',
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "card",
    style: {
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '28px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '40px',
      color: 'var(--primary)',
      marginBottom: '10px'
    }
  }, "Yay \u2014 thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      color: 'var(--text-body)',
      margin: '0 0 22px'
    }
  }, "Your request is on its way. I'll be in touch very soon to start planning your pieces!"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Erin",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Event date",
    type: "text",
    placeholder: "e.g. Saturday, July 12"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      paddingLeft: '4px',
      display: 'block',
      marginBottom: '8px'
    }
  }, "Occasion"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, data.eventTypes.map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t,
    onClick: () => setType(t),
    style: {
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: type === t ? 'rose' : 'plum',
    solid: type === t
  }, t))))), /*#__PURE__*/React.createElement(Input, {
    label: "Tell me about your vision",
    textarea: true,
    placeholder: "Colours, theme, size of space\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    type: "submit"
  }, "Send my request")))));
}
window.PPContact = PPContact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Prettily Popped — site footer
function PPFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '26px',
      color: '#fff',
      marginBottom: '10px'
    }
  }, "Prettily ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--rose-300)'
    }
  }, "Popped")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14.5px',
      lineHeight: 1.6,
      maxWidth: '34ch',
      opacity: 0.82,
      margin: '0 0 14px'
    }
  }, "Custom balloon decor & event styling, handmade in Fredericton, New Brunswick."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '26px',
      color: 'var(--gold-400)'
    }
  }, "\u2014 Erin")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: ftHead
  }, "Explore"), ['Home', 'Services', 'Gallery', 'About', 'Contact'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav(l),
    style: ftLink
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: ftHead
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: ftText
  }, "Fredericton & surrounding areas"), /*#__PURE__*/React.createElement("p", {
    style: ftText
  }, "Will travel for a small mileage fee"), /*#__PURE__*/React.createElement("p", {
    style: ftText
  }, "hello@prettilypopped.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(247,231,226,0.14)',
      padding: '18px 28px',
      textAlign: 'center',
      fontSize: '12.5px',
      opacity: 0.6
    }
  }, "\xA9 2023\u20132026 Prettily Made Events \xB7 Make your event pop"));
}
const ftHead = {
  fontFamily: 'var(--font-body)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  fontSize: '11px',
  fontWeight: 700,
  color: 'var(--gold-400)',
  margin: '0 0 14px'
};
const ftLink = {
  display: 'block',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '5px 0',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  color: 'var(--text-on-ink)',
  opacity: 0.82,
  textAlign: 'left'
};
const ftText = {
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  margin: '0 0 9px',
  opacity: 0.82,
  lineHeight: 1.5
};
window.PPFooter = PPFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
// Prettily Popped — Gallery screen (placeholder masonry)
function PPGallery({
  onNav
}) {
  const {
    Button,
    Tag,
    SectionHeading
  } = window.PrettilyPoppedDesignSystem_13a0cc;
  const tones = ['blush', 'peach', 'gold', 'sage', 'powder', 'lilac'];
  const tiles = [{
    t: 'Birthday garland',
    tone: 'blush',
    span: 2
  }, {
    t: 'Wedding arch',
    tone: 'gold',
    span: 1
  }, {
    t: 'Baby shower',
    tone: 'powder',
    span: 1
  }, {
    t: 'Tabletop clusters',
    tone: 'sage',
    span: 1
  }, {
    t: 'Golden arch',
    tone: 'gold',
    span: 2
  }, {
    t: 'Anniversary column',
    tone: 'lilac',
    span: 1
  }, {
    t: 'Grand opening',
    tone: 'peach',
    span: 1
  }, {
    t: 'Corporate event',
    tone: 'blush',
    span: 1
  }];
  const grad = {
    blush: 'linear-gradient(150deg,#F7DCD9,#EFC5C5)',
    peach: 'linear-gradient(150deg,#F7E0CC,#F3CBA8)',
    gold: 'linear-gradient(150deg,#F6EAD0,#E6CB8E)',
    sage: 'linear-gradient(150deg,#E1EADF,#AFC3AC)',
    powder: 'linear-gradient(150deg,#E2EEF3,#B7D2DD)',
    lilac: 'linear-gradient(150deg,#EEE6F2,#C9B6D6)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Gallery",
    title: "A few of my favourite",
    script: "creations",
    lead: "A peek at recent pieces. Swap these placeholders for your own event photos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '180px',
      gap: '16px',
      marginTop: '40px'
    }
  }, tiles.map((tile, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: 'span ' + tile.span,
      gridRow: tile.span === 2 ? 'span 2' : 'span 1',
      borderRadius: 'var(--radius-lg)',
      background: grad[tile.tone],
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '14px',
      left: '14px'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "plum",
    solid: true,
    size: "sm"
  }, tile.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Start your own")));
}
window.PPGallery = PPGallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Prettily Popped — Home screen
const PPDS = window.PrettilyPoppedDesignSystem_13a0cc;
function PPHome({
  onNav
}) {
  const {
    Button,
    Tag,
    ServiceCard,
    SectionHeading,
    Card
  } = PPDS;
  const data = window.PPData;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--rose-50) 0%, var(--cream) 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 72px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--primary)'
    }
  }, "Hello & welcome \u2014"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(40px, 5.5vw, 68px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: 'var(--plum-900)',
      margin: '8px 0 18px'
    }
  }, "Let's make your", /*#__PURE__*/React.createElement("br", null), "next event truly ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--primary)'
    }
  }, "pop"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '46ch',
      margin: '0 0 28px'
    }
  }, "Custom balloon decor, garlands and event styling \u2014 handmade in Fredericton, with delivery and installation included. Big or small, I'd love to bring your vision to life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Services')
  }, "Browse services"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Book a consult")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginTop: '26px'
    }
  }, data.eventTypes.slice(0, 4).map((e, i) => /*#__PURE__*/React.createElement(Tag, {
    key: e,
    tone: ['rose', 'gold', 'sage', 'powder'][i]
  }, e)))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(150deg, #F7DCD9 0%, #EFC5C5 45%, #E6CB8E 100%)',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '38px',
      color: 'rgba(58,34,48,0.30)',
      textAlign: 'center',
      lineHeight: 1.2
    }
  }, "your photo", /*#__PURE__*/React.createElement("br", null), "here"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '16px',
      left: '16px'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "plum",
    solid: true
  }, "Organic balloon garland"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How it works",
    title: "Three easy steps to a",
    script: "popping party"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '22px',
      marginTop: '40px'
    }
  }, data.steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      color: 'var(--rose-300)',
      fontWeight: 600
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--text-strong)',
      margin: '8px 0 6px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.55
    }
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-shell)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '36px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What I offer",
    title: "Balloons for every",
    script: "occasion"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('Services')
  }, "See all services \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '22px'
    }
  }, data.services.slice(0, 3).map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.name
  }, s, {
    onSelect: () => onNav('Contact')
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '80px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '32px',
      color: 'var(--primary)'
    }
  }, "Meet your balloon artist"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(24px, 3vw, 34px)',
      lineHeight: 1.3,
      color: 'var(--text-strong)',
      margin: '14px 0 24px',
      letterSpacing: '-0.01em'
    }
  }, "\"I take such pride in my work and simply love seeing a vision come to life by my own two hands.\""), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('About')
  }, "Read my story")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    onDark: true,
    eyebrow: "Ready when you are",
    title: "Let's make your event",
    script: "unforgettable"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: () => onNav('Gallery')
  }, "View the gallery")))));
}
window.PPHome = PPHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Prettily Popped — site navigation
const {
  Button: PPButton
} = window.PrettilyPoppedDesignSystem_13a0cc;
function PPNav({
  current,
  onNav
}) {
  const links = ['Home', 'Services', 'Gallery', 'About', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(251,244,239,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1.5px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('Home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: dot('var(--balloon-blush)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--rose-500)')
  }), /*#__PURE__*/React.createElement("span", {
    style: dot('var(--gold-400)')
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '22px',
      color: 'var(--plum-900)',
      letterSpacing: '-0.01em'
    }
  }, "Prettily ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--primary)'
    }
  }, "Popped"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav(l),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      fontWeight: 600,
      color: current === l ? 'var(--berry-600)' : 'var(--text-body)',
      background: current === l ? 'var(--rose-50)' : 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: '8px'
    }
  }, /*#__PURE__*/React.createElement(PPButton, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('Contact')
  }, "Book a consult")))));
}
function dot(bg) {
  return {
    width: '11px',
    height: '14px',
    background: bg,
    borderRadius: '50% 50% 50% 50% / 46% 46% 54% 54%'
  };
}
window.PPNav = PPNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Prettily Popped — Services screen (filterable grid)
function PPServices({
  onNav
}) {
  const {
    Button,
    Tag,
    ServiceCard,
    SectionHeading
  } = window.PrettilyPoppedDesignSystem_13a0cc;
  const data = window.PPData;
  const cats = ['All', 'Garlands', 'Centrepieces', 'Columns', 'Arches'];
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? data.services : data.services.filter(s => s.tag === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--rose-50), var(--cream))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Services & pricing",
    title: "Pick your",
    script: "pop",
    lead: "Every piece is custom-built in your colours. Delivery and installation in the Fredericton area are included \u2014 I'll travel a little further for a small mileage fee."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '32px'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid ' + (cat === c ? 'transparent' : 'var(--border-strong)'),
      background: cat === c ? 'var(--primary)' : 'var(--white-warm)',
      color: cat === c ? '#fff' : 'var(--text-body)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, shown.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.name
  }, s, {
    unit: s.tag === 'Garlands' ? '/ garland' : '',
    onSelect: () => onNav('Contact')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      padding: '32px 36px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-soft)',
      border: '1.5px solid var(--rose-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, "Something bigger in mind?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      fontSize: '15px'
    }
  }, "Custom arches, full-room styling and themed installs are my favourite. Let's dream it up together!")), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: () => onNav('Contact')
  }, "Request a custom quote"))));
}
window.PPServices = PPServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Prettily Popped — sample content for the website UI kit.
// Prices & products mirror the real services list at prettilypopped.com.
window.PPData = {
  services: [{
    name: '6 ft Organic Garland',
    price: 'CA$65',
    tone: 'blush',
    tag: 'Garlands',
    blurb: 'A sweet, hand-built garland — perfect for a dessert table or backdrop.'
  }, {
    name: '10 ft Organic Garland',
    price: 'CA$120',
    tone: 'peach',
    tag: 'Garlands',
    badge: 'Most popular',
    blurb: 'A lush, full garland in your colours — the showstopper of any space.'
  }, {
    name: '16 ft Organic Garland',
    price: 'CA$185',
    tone: 'gold',
    tag: 'Garlands',
    blurb: 'Big, bold and beautiful — built to frame a whole feature wall.'
  }, {
    name: 'Balloon Stack / Centrepiece',
    price: 'CA$60',
    tone: 'lilac',
    tag: 'Centrepieces',
    blurb: 'A charming stacked centrepiece to make every table feel special.'
  }, {
    name: 'Balloon Tower / Column',
    price: 'CA$80',
    tone: 'powder',
    tag: 'Columns',
    blurb: 'A standing column to frame an entrance, stage, or photo corner.'
  }, {
    name: 'Golden Arch — full fill',
    price: 'CA$200',
    tone: 'gold',
    tag: 'Arches',
    badge: 'Statement',
    blurb: 'Our golden arch, fully filled — an unforgettable backdrop.'
  }],
  eventTypes: ['Birthdays', 'Weddings', 'Baby showers', 'Anniversaries', 'Corporate', 'Grand openings'],
  steps: [{
    n: '01',
    t: 'Tell me your vision',
    d: "Share your date, colours, and the vibe you're dreaming of."
  }, {
    n: '02',
    t: 'I design your pieces',
    d: 'I plan garlands, columns and centrepieces to match your space.'
  }, {
    n: '03',
    t: 'Delivered & installed',
    d: 'I bring it to life on-site — you just enjoy the day.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
