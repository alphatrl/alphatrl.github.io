/// <reference types="vite-plugin-svgr/client" />

import cn from 'classnames';
import React from 'react';

import GridCard from '../../../../../shared/components/GridCard';
import GitHubIcon from '../../../../../shared/icons/social/github.svg?react';
import LinkedInIcon from '../../../../../shared/icons/social/linkedin.svg?react';
import EmailIcon from '../../../../../shared/icons/social/mail.svg?react';
import TwitterIcon from '../../../../../shared/icons/social/twitter.svg?react';

const buttonClassName = cn(
  'flex items-center justify-center rounded-2xl transition-colors',
  'bg-gray-100 text-slate-800',
  'hover:bg-gray-200 hover:text-slate-900',
  'focus:bg-gray-200 focus:text-slate-900',
);

const ContactMeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, ...props }, ref) => {
  const {
    VITE_EMAIL_ADDRESS,
    VITE_LINKEDIN_USERNAME,
    VITE_GITHUB_USERNAME,
    VITE_TWITTER_USERNAME,
  } = import.meta.env;

  return (
    <GridCard
      ref={ref}
      style={style}
      className={cn(className, 'p-4')}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
        <a
          href={`mailto:${VITE_EMAIL_ADDRESS}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className={buttonClassName}
        >
          <EmailIcon className="size-8 xl:size-12" />
        </a>

        <a
          href={`https://github.com/${VITE_GITHUB_USERNAME}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className={buttonClassName}
        >
          <GitHubIcon className="size-9 xl:size-14" />
        </a>

        <a
          href={`https://twitter.com/${VITE_TWITTER_USERNAME}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className={buttonClassName}
        >
          <TwitterIcon className="size-9 xl:size-14" />
        </a>

        <a
          href={`https://linkedin.com/in/${VITE_LINKEDIN_USERNAME}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className={buttonClassName}
        >
          <LinkedInIcon className="size-9 xl:size-14" />
        </a>
      </div>
    </GridCard>
  );
});

ContactMeCard.displayName = 'ContactMeCard';

export default ContactMeCard;
