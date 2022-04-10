import { Grid, ScrollView, useTheme, View } from '@aws-amplify/ui-react';

interface IGridView {
  rowBase?: number;
  rowLarge?: number;
  columnBase?: number;
  columnLarge?: number;
  children: React.ReactNode;
}

interface IContentView {
  row?: number;
  column?: number;
  isScrollAble?: boolean;
  children: React.ReactNode;
}

/**
 * columnSpan & rowSpan berpengaruh jika masing2 template Row dan Columns pada grid terisi
 * jika tidak terisi, maka akan memilik default value 1fr
 */
export function GridView(props: IGridView) {
  // const { tokens } = useTheme();

  return (
    <Grid
      templateColumns={{
        base: `repeat(${props.columnBase || 1})`,
        large: `repeat(${props.columnLarge || 1})`,
      }}
      templateRows={{
        base: `repeat(${props.rowBase || 1})`,
        large: `repeat(${props.rowLarge || 1})`,
      }}
      gap="var(--amplify-space-small)"
    >
      {props.children}
    </Grid>
  );
}

export default function ContentView(props: IContentView) {
  const { tokens } = useTheme();

  if (props.isScrollAble) {
    return (
      <ScrollView
        rowSpan={props.row || 1}
        columnSpan={props.column || 1}
        orientation="horizontal"
        width="100%"
        backgroundColor="var(--amplify-colors-orange-40)"
        padding={tokens.space.medium}
      >
        {props.children}
      </ScrollView>
    );
  }

  return (
    <View
      rowSpan={props.row || 1}
      columnSpan={props.column || 1}
      backgroundColor="var(--amplify-colors-orange-40)"
      padding={tokens.space.medium}
    >
      {props.children}
    </View>
  );
}
