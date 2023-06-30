import React from 'react';
import './button.css';

interface ButtonProps {
   /**
   * The unique ID of an element(optional).
   */
   id: string;
    /**
   * Type of the button.
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Aria-label text for button.
   * `aria-label` attribute that is used to define a string that labels the current element.
   * use it in cases where a text label is not visible on the screen.
   * if there is visible text labeling the element, use `aria-labelledby` instead.
   */
  ariaLabel: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  id,
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ariaLabel,
  type,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      id={id}
      type={type}
      aria-label={ariaLabel}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
