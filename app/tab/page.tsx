"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./_components/Tab_30";

const page = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full flex justify-center">
        <TabsList activeTab="account"  setActiveTab={() => {}}>
          <TabsTrigger value="account" >Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Manage your account settings here.
        </TabsContent>
        <TabsContent value="password">Update your password here.</TabsContent>
        <TabsContent value="settings">
          Customize your application settings here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
