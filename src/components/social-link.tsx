import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Link, Tooltip } from "@heroui/react";

interface SocialLinkProps {
  icon: string;
  label: string;
  href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, label, href }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Tooltip content={label} placement="bottom">
        <Link 
          isExternal 
          href={href}
          className="glow-effect"
        >
          <Button
            isIconOnly
            variant="flat"
            radius="full"
            className="bg-content2 border border-content3 hover:border-primary-500 transition-colors duration-300"
            aria-label={label}
          >
            <Icon icon={icon} width={20} height={20} className="text-foreground-500 hover:text-primary-500 transition-colors duration-300" />
          </Button>
        </Link>
      </Tooltip>
    </motion.div>
  );
};