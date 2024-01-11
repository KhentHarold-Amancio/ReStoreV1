import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRestore } from "../../../../hooks/useRestore";
import { COLORS } from "../../../../constants";
import { Icon } from "@ui-kitten/components";
import {useDemand} from "../../../../hooks/useDemand";


const ReloadButton = () => {
    const { refetch } = useRestore();
    const { doFetchDemand } = useDemand();

    const RefreshIcon = (props): IconElement => (
        <Icon {...props} name="refresh-outline" />
    );

    const refresh = () => {
        refetch();
        doFetchDemand();
    }

    return (
        <TouchableOpacity onPress={refresh}>
            <RefreshIcon fill={COLORS.white} width={35} height={35} />
        </TouchableOpacity>
    )
}

export default ReloadButton;