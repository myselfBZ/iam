import React, { useState } from 'react';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const contacts = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/myselfBZ',
    Icon: GitHubIcon,
    bg: 'bg-zinc-900 dark:bg-zinc-100',
    iconColor: 'text-white dark:text-zinc-900',
    labelColor: 'text-white dark:text-zinc-900',
    hoverBg: 'hover:bg-zinc-700 dark:hover:bg-zinc-300',
    bubble: '🐙',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/alivobjonov',
    Icon: TelegramIcon,
    bg: 'bg-sky-400',
    iconColor: 'text-white',
    labelColor: 'text-white',
    hoverBg: 'hover:bg-sky-500',
    bubble: '✈️',
  },
  {
    id: 'discord',
    label: 'Discord',
    href: 'https://discord.com/users/1348496475616968704',
    Icon: DiscordIcon,
    bg: 'bg-indigo-500',
    iconColor: 'text-white',
    labelColor: 'text-white',
    hoverBg: 'hover:bg-indigo-600',
    bubble: '🎮',
  },
];

const ContactCard: React.FC<{ contact: typeof contacts[0] }> = ({ contact }) => {
  const [popped, setPopped] = useState(false);
  const { label, href, Icon, bg, iconColor, labelColor, hoverBg, bubble } = contact;

  const handleClick = () => {
    setPopped(true);
    setTimeout(() => setPopped(false), 600);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={`
        group relative flex flex-col items-center gap-3 px-10 py-7
        ${bg} ${hoverBg}
        rounded-2xl shadow-md hover:shadow-xl
        transition-all duration-200 ease-out
        hover:-translate-y-1.5 active:scale-95
        cursor-pointer select-none
      `}
    >
      {/* Floating emoji on hover */}
      <span
        className={`
          absolute -top-5 left-1/2 -translate-x-1/2 text-xl pointer-events-none
          transition-all duration-300
          ${popped ? 'opacity-100 -translate-y-6 scale-125' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-1'}
        `}
        aria-hidden
      >
        {bubble}
      </span>

      <span className={`${iconColor} transition-transform duration-200 group-hover:scale-110`}>
        <Icon />
      </span>

      <span className={`text-sm font-semibold ${labelColor} tracking-wide`}>
        {label}
      </span>
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800 relative z-10">
      <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        Let's Connect
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-10 text-base">
        Say hi — I don't bite 👋
      </p>

      <div className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default Contact;