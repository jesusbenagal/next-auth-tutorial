"use client";

import { UserRole } from "@prisma/client";

import { FormError } from "@/components/form-error";

import { useCurrentRole } from "@/hooks/useCurrentRole";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="You are not authorized to view this page." />;
  }

  return <>{children}</>;
};
