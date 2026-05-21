import Image from 'next/image';
import type { TeamMember } from '@/content/team';

type Props = { member: TeamMember };

export function TeamMemberCard({ member }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-line bg-white transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-square w-full overflow-hidden bg-brand-surface">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-bold text-brand-navy">{member.name}</h3>
        <p className="mt-1 text-xs text-brand-muted">{member.role}</p>
      </div>
    </article>
  );
}
